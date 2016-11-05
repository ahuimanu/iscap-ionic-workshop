/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
.factory('Projects', function() {
  
  var Projects = {};

  Projects.all = function() {
    var projectString = window.localStorage['projects'];
    
    if(projectString) {
      return angular.fromJson(projectString);
    }
    return [];
  };
  
  Projects.save = function(projects) {
    window.localStorage['projects'] = angular.toJson(projects);
  },
  
  Projects.newProject = function(projectTitle) {
    // Add a new project
    return {
      title: projectTitle,
      tasks: []
    };
  }
  
  Projects.getLastActiveIndex = function() {
    
    return parseInt(window.localStorage['lastActiveProject']) || 0;
  },
  Projects.setLastActiveIndex = function(index) {
    window.localStorage['lastActiveProject'] = index;
  }  
  
  return Projects;

})