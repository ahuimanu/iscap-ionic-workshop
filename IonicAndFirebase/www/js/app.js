// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'IonicAndFirebase' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of dependencies
angular.module('IonicAndFirebase', ['ionic', 'firebase'])

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
 * The FireREST factory uses the Firebas REST API to CRUD data to firebase.
 * it uses the REST endpoints described here: https://www.firebase.com/docs/rest/api/
 */
.factory("FireREST", function($http){
  
  var FireREST = {};
  
  FireREST.url = "https://ionic-and-firebase.firebaseio.com/Projects.json";
  FireREST.activeurl = "https://ionic-and-firebase.firebaseio.com/lastActiveProject.json";
  
  // GET ALL PROJECTS
  FireREST.all = function(){

    // Simple GET request example:
    return $http.get(FireREST.url)
      .then(function(response){
        return response.data;
      },
      function(response){
        console.log("Problem: " + response); 
      });
  };
  
  //SAVE ALL PROJECTS
  FireREST.save = function(projects){
    $http.put(FireREST.url, projects)
    .then(
      function successCallback(response){
        console.log(response.data);
      },
      function errorCallback(response){
        console.error(response);
      }
    );
  };
  
  //CREATE NEW PROJECT
  FireREST.newProject = function(projectTitle) {
    // Add a new project
    return {
      title: projectTitle,
      tasks: []
    };
  }
  
  FireREST.create = function(project){
    
  };
  
  FireREST.getLastActiveIndex = function() {
    
    return parseInt(window.localStorage['lastActiveProject']) || 0;
    // Simple GET request example:
    $http.get(FireREST.url)
      .then(function(response){
        return parseInt(response.data);
      },
      function(response){
        console.log("Problem: " + response); 
      });    
  };
  
  FireREST.setLastActiveIndex = function(index) {
    
    $http.put(FireREST.activeurl, index)
    .then(
      function successCallback(response){
        console.log(response.data);
      },
      function errorCallback(response){
        console.error(response);
      }
    );
  };
  
  return FireREST;
  
})

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, FireREST,   
                                 $ionicSideMenuDelegate) {

  // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {
    var newProject = FireREST.newProject(projectTitle);
    $scope.projects.push(newProject);
    
    //using Firebase
    FireREST.save($scope.projects);
    
    $scope.selectProject(newProject, $scope.projects.length-1);
  }
  
  // A utility function to check to see if we have any projects yet
  var checkProjectsLength = function(){
    
    var proceed = true;
    
    while(proceed) {
      if(!$scope.projects){
        var projectTitle = prompt('Your first project title:');
        if(projectTitle) {
          createProject(projectTitle);
          proceed = false;
        }
      }
    }
  }
                                   
  //Load or intialize projects from Firebase
  $scope.initializeProjects = function(){
    
    // Load or initialize projects from firebase
    var projectsPromise = FireREST.all();
    
    //get projects from firerest
    projectsPromise.then( function(result){
      
      $scope.projects = result;
      console.log($scope.projects);
      
      //checkProjectsLength();
      
      // Grab the last active, or the first project
      $scope.activeProject = $scope.projects[FireREST.getLastActiveIndex()];
      
    },
    //no projects found
    function(result){
      
      $scope.projects = [];
      
      //checkProjectsLength();
      
      console.error("No dice");
    });
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
    $scope.activeProject = project;
    FireREST.setLastActiveIndex(index);
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
    $scope.activeProject.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();

    // Inefficient, but save all the projects
    FireREST.save($scope.projects);

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
