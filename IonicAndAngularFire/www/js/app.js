// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'IonicAndAngularFire' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of dependencies - we introduce firebase
angular.module('IonicAndAngularFire', ['ionic', 'firebase'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

/**
 * The AngularFireService factory uses the angularfire library to CRUD data to firebase.
 */
.factory("AngularFireService", function($firebaseArray, $firebaseObject){
  
  var AngularFireService = {};

  /* AngularFire 1.x */
  AngularFireService.projectsUrl = "https://ionic-and-firebase.firebaseio.com/Projects";
  //AngularFireService.projectsRef = new Firebase(AngularFireService.projectsUrl);
  AngularFireService.lastActiveProjectUrl = "https://ionic-and-firebase.firebaseio.com/lastActiveProject";
  //AngularFireService.lastActiveProjectRef = new Firebase(AngularFireService.lastActiveProjectUrl);
  
  /* AngularFire 2.x */
  AngularFireService.projectsRef = new firebase.database().ref().child("Projects");
  AngularFireService.projects = $firebaseArray(AngularFireService.projectsRef);
  
  AngularFireService.lastActiveProjectRef = new firebase.database().ref().child("lastActiveProject");
  AngularFireService.lastActiveProject = $firebaseObject(AngularFireService.lastActiveProjectRef);


  // GET ALL PROJECTS
  AngularFireService.all = function(){
    //returns the promise
    return AngularFireService.projects.$loaded();
  };

  //CREATE NEW PROJECT
  AngularFireService.newProject = function(projectTitle) {

    // Add a new project
    AngularFireService.projects.$loaded().then(function(){
      AngularFireService.projects.$add(
        {
          title: projectTitle,
          tasks: []
        }).then(function(ref){
          var id = ref.key();
          console.log("added record with id " + id);
          return AngularFireService.projects.$indexFor(id); // returns location in the array
        });
    });    
  }
  
  AngularFireService.createTask = function(project, task){
    //https://ionic-and-firebase.firebaseio.com/Projects/2

    var index = project.$id;
    
    var url = AngularFireService.projectsUrl + "/" + index + "/tasks";
    console.log(url);
    
    //the angularfire 2.x approach
    //var ref = new Firebase(url);
    //var tasks = $firebaseArray(ref);
    
    //the angularfire 3.x approach
    // See https://firebase.google.com/docs/web/setup#project_setup for how to
    // auto-generate this config
    /*
    var config = {
      apiKey: "AIzaSyAsyFaAjeoM1voGv_Co22UapUgpkfurvPo",
      authDomain: "ionic-and-firebase.firebaseapp.com",
      databaseURL: "https://ionic-and-firebase.firebaseio.com"
    };
  
    firebase.initializeApp(config);
    */
    
    //var ref = firebase.database().ref();
    
    var ref = firebase.database().ref().child("Projects").child(index).child("tasks");
    
    var tasks = $firebaseArray(ref);
    
    //don't for get asynch
    tasks.$loaded().then(function(){
      
      //setting a our own id rather than the normal push id provided with $add
      //http://stackoverflow.com/questions/30549627/generate-custom-key-with-add-angularfire
      //ref.child(tasks.length).set(task);      
      
      tasks.$ref().child(tasks.length).set(task);  
      
      console.log(tasks.length);      
    });

    /*
    tasks.$add(task).then(function(ref)
    {
      var id = ref.key();
      console.log("added record with id " + id);
    });*/
    
  };
  
  AngularFireService.getLastActiveIndex = function() {
    
    var obj = new $firebaseObject(AngularFireService.lastActiveProjectRef);
    
    //returns the promise
    return obj.$loaded();
  };
  
  AngularFireService.setLastActiveIndex = function(index) {
    
    var obj = new $firebaseObject(AngularFireService.lastActiveProjectRef);
    obj.$loaded().then(
      function() {
        console.log(index);
        obj.$value = index;
        obj.$save().then(function(data){
          console.log(data + " was saved");
        });
      },
      function(){
        console.error("could not talk to firebase");
      }
    );
  };
  
  return AngularFireService;
  
})


/* Controller for our app
*/
.controller('TodoCtrl', function($scope, $timeout, $ionicModal, AngularFireService,   
                                 $ionicSideMenuDelegate) {

  //Load or intialize projects from Firebase
  $scope.initializeProjects = function(){
    
    // Load or initialize projects from AngularFireService
    AngularFireService.all().then(function(){

      $scope.projects =  AngularFireService.projects;
      
      console.log($scope.projects);
      
      
      //$scope.activeProject = $scope.projects.$getRecord(AngularFireService.getLastActiveIndex());
      
      
      AngularFireService.getLastActiveIndex()
        .then(function(val){
        
          //value is the angularfire object and promise
          $scope.lastActiveIndex = parseInt(val.$value);
  
          // Grab the last active, or the first project
          
          //there are problems with using array indices in firebase: 
          //https://www.firebase.com/docs/web/guide/understanding-data.html#section-arrays-in-firebase
          //$scope.activeProject = $scope.projects[$scope.lastActiveIndex];
          
          //this is considered preferrable
          $scope.activeProject = $scope.projects.$getRecord($scope.lastActiveIndex);

        });
    });
  }

  // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {

    var index = AngularFireService.newProject(projectTitle);
    
    //again, rather than using indicies, use getrecord
    $scope.activeProject = $scope.projects.$getRecord(index);

    $scope.selectProject($scope.activeProject, index);
  }
  
  // Called to create a new project
  $scope.newProject = function() {
    var projectTitle = prompt('Project name');
    if(projectTitle) {
      createProject(projectTitle);
    }
  };

  // Called to select the given project
  $scope.selectProject = function(project, index) {
    
    //$scope.activeProject = AngularFireService.projects[index];
    //$scope.activeProject = $scope.projects.$getRecord(index);
    
    $scope.activeProject = project;
    AngularFireService.setLastActiveIndex(index);
    $ionicSideMenuDelegate.toggleLeft(false);
  };

  // Create our modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope
  });

  $scope.createTask = function(task) {
    if(!$scope.activeProject || !task) {
      return;
    }
    console.log($scope.activeProject.tasks);
    
    AngularFireService.createTask($scope.activeProject, 
      {
        title: task.title
      });
      
    $scope.taskModal.hide();      

    task.title = "";
  };

  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  }

  $scope.toggleProjects = function() {
    $ionicSideMenuDelegate.toggleLeft();
  };
  
  //load up projects and go
  $scope.initializeProjects();

});