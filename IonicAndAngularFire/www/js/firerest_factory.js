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
