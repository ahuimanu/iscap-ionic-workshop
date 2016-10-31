# ISCAP IONIC WORKSHOP

Las Vegas, November 2016

Presented by: Jeffry Babb, Kareem Dana, and Musa Jafar

----

# Overview 

* 1.0 [Hybrid Apps](#10-hybrid-apps)
  * 1.1 [Ionic Framework](#11-ionic-framework)
  * 1.2 [Apache Cordova](#12-apache-cordova)
* 2.0 [Ionic Basics](#20-ionic-basics)
  * 2.1 [Environment](#21-environment)
  * 2.2 [Project Seed](#23-project-seed)
  * 2.3 [Ionic Codepen Demos](#23-ionic-codepen-demos)
* 3.0 [Todo Exampe](#30-todo-example) (The Ionic Book)
  * 3.1 [Starting the App](#31-starting-the-app)
	* 3.1.1 [Adding a Side-Menu Structure](#311-adding-a-side-menu-structure)
	* 3.1.2 [Initializing the App](#312-initializing-the-app)
  * 3.2 [Testing the App](#32-testing-the-app)
	* 3.2.1 [Results in a Browser](#321-results-in-a-browser)
	* 3.2.2 [Browser Developer Tools](#322-browser-developer-tools)
  * 3.3 [Completing the App](#33-completing-the-app)
    * 3.3.1 [Ionic Extends AngularJS](#331-ionic-extends-angularjs)
	* 3.3.2 [Using ng-repeat and an Angular Controller](#332-using-ng-repeat-and-an-angular-controller)
	* 3.3.3 [Relationship between View and Controller in AngularJS](#333-relationship-between-view-and-controller-in-angularjs)
	* 3.3.4 [Creating Tasks](#334-creating-tasks)
	* 3.3.5 [Adding Projects](#335-adding-projects)
	* 3.3.6 [Checking Local Storage for Data](#336-checking-local-storage-for-data)
  * 3.4 Publishing
* 4.0 NoSQL Document Persistence
  * 4.1 Firebase ([https://firebase.io](https://firebase.io))
* 5.0 Angular and Ionic Basics
  * 5.1 Directives
  * 5.2 Views
  * 5.3 Models
  * 5.4 Controllers
  * 5.5 Services 
* 6.0 Ionic Services
  * 6.1 Ionic Creator
  * 6.2 Ionic Cloud
  * 6.3 Ionic Lab
* 7.0 Packing with Ionic Cloud
  * 7.1 Android App Keystore
  * 7.2 Packaging and Ionic Cloud
  * 7.3 Installing to device (Requires ADK)
* 8.0 Conclusion

----

Return to [Overview](#overview)

## 1.0 Hybrid Apps

![Hybrid Native Apps](http://i39.photobucket.com/albums/e188/ahuimanu/native_html_hybrid_apps_zpsof5lyoh7.jpg)

(Credit: [https://webscope.co.nz](https://webscope.co.nz))

### 1.1 Ionic Framework

![Ionic Framework](http://i39.photobucket.com/albums/e188/ahuimanu/build-consumer-apps-using-mobile-sdk-and-ionic-framework_zpsgc3plqic.jpg)

### 1.2 Apache Cordova

![Apache Cordova](http://i39.photobucket.com/albums/e188/ahuimanu/apache-cordova-4-638_zpsjgbemdvh.jpg)

Return to [Overview](#overview)

----

## 2.0 Ionic Basics

* Obtain: [http://ionicframework.com](http://ionicframework.com)
  * Usually with `npm`
* Initialization
* CSS/Sass
* Browser Support
  * Ionic 1: native/hybrid apps targeting Cordova
  * Ionic 2: (outside the scope of this workshop): 
    * Native/hybrid targeting Cordova
    * Progressive Hybrid Apps targeting [Electron](http://electron.atom.io/)
    * This is worth watching: [Electron Apps](http://electron.atom.io/apps/)

Usual starting point using [Node](https://nodejs.org)

```
npm install -g ionic
npm install -g cordova
```

Seeding a new project:

```
ionic start newprojectname blank
```

And you get this structure:

```
$ cd newprojectname && ls

├── bower.json     // bower dependencies
├── config.xml     // cordova configuration
├── gulpfile.js    // gulp tasks
├── hooks          // custom cordova hooks to execute on specific commands
├── ionic.project  // ionic configuration
├── package.json   // node dependencies
├── platforms      // iOS/Android specific builds will reside here
├── plugins        // where your cordova/ionic plugins will be installed
├── scss           // scss code, which will output to www/css/
└── www            // application - JS code and libs, CSS, images, etc.
```

Adding platforms:

```
ionic platform add ios
ionic platform add android
```

Testing and Running:

```
ionic build android
ionic emulate android
```

Return to [Overview](#overview)

---

### 2.1 Environment

For today's workshop, there are several  approaches that can be used to run Ionic:

* local
* [Cloud 9](https://c9.io): web-based IDE and Host environment - this is my own general preference
* [Plunker](https://plnkr.co): online code editor - we'll use this because it is easy to use in this setting
* [Ionic Playground](http://play.ionic.io/): provided by ionic - best for testing and trying things out (can't save)
* [Ionic Creator](https://creator.ionic.io): paid tool for UI design and app development
 
Return to [Overview](#overview)

----

### 2.2 Project Seeding

We seed projects with the `ionic` command-line tool.  We can choose from the following starter templates:

* `ionic start app_name blank`
* `ionic start app_name tabs`
* `ionic start app_name sidemenu`

![Project Seeding](http://i39.photobucket.com/albums/e188/ahuimanu/ionic-start-templates_zpshcgj5c0m.png) 


Return to [Overview](#overview)

----

### 2.3 Ionic Codepen Demos

[Ionic Codepen Demos](http://codepen.io/ionic/pens/public/)

Return to [Overview](#overview)

----

### 2.4 Ionic CLI

There are some tools in the ionic CLI to get to know:

```
  _             _          
 (_)           (_)         
  _  ___  _ __  _  ___     
 | |/ _ \| '_ \| |/ __| 
 | | (_) | | | | | (__     
 |_|\___/|_| |_|_|\___|  CLI v2.1.4

Usage: ionic task args


=======================
Available tasks: 
(use --help or -h for more info)


   start  ..........  Starts a new Ionic project in the specified PATH
   serve  ..........  Start a local development server for app dev/testing
   setup  ..........  Configure the project with a build tool (beta)
   generate  .......  Generate pages and components
   platform  .......  Add platform target for building an Ionic app
   run  ............  Run an Ionic project on a connected device
   emulate  ........  Emulate an Ionic project on a simulator or emulator
   build  ..........  Build (prepare + compile) an Ionic project for a given platform.

   plugin  .........  Add a Cordova plugin
   resources  ......  Automatically create icon and splash screen resources (beta)
                      Put your images in the ./resources directory, named splash or icon.
                      Accepted file types are .png, .ai, and .psd.
                      Icons should be 192x192 px without rounded corners.
                      Splashscreens should be 2208x2208 px, with the image centered in the middle.

   upload  .........  Upload an app to your Ionic account
   share  ..........  Share an app with a client, co-worker, friend, or customer
   lib  ............  Gets Ionic library version or updates the Ionic library
   io  .............  Integrate your app with Ionic Cloud services
   security  .......  Store your app's credentials for the Ionic Cloud
   push  ...........  Upload APNS and GCM credentials to Ionic Push
   package  ........  Use Ionic Package to build your app
   config  .........  Set configuration variables for your ionic app
   service  ........  Add an Ionic service package and install any required plugins
   add  ............  Add an Ion, bower component, or addon to the project
   remove  .........  Remove an Ion, bower component, or addon from the project
   list  ...........  List Ions, bower components, or addons in the project
   info  ...........  List information about the users runtime environment
   help  ...........  Provides help for a certain command
   link  ...........  Sets your Ionic App ID for your project
   hooks  ..........  Manage your Ionic Cordova hooks
   state  ..........  Saves or restores state of your Ionic Application using the package.json file
   docs  ...........  Opens up the documentation for Ionic
```

Return to [Overview](#overview)

----

### 2.5 Local Environment Considerations

If you are developing locally, when you will usually end up doing to build and test on a device,
then you will need to configured build platforms:

* `ionic platform add ios` <-- can only be done if you are developing on a Mac
* `ionic platform add android`

Respectively, this will require these to be installed locally:

* Xcode and the ios sdk
* The android ADK

Further, you can build and emulate on your development machine:

* `ionic build android`
* `ionic emulate android`

Return to [Overview](#overview)

----

## 3.0 Todo Example

From the "Ionic Book."

![Todo Project Mockup](http://ionicframework.com.s3.amazonaws.com/guide/0.1.0/3-mockup.png)

Return to [Overview](#overview)

----

### 3.1 Starting the App

Since you've run the `ionic start app_name` command, you can build up `index.html` in the `www` directory:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo</title>
    <meta name="viewport" content="initial-scale=1, maximum-scale=1, user-scalable=no, width=device-width">

    <link href="lib/ionic/css/ionic.css" rel="stylesheet">

    <script src="lib/ionic/js/ionic.bundle.js"></script>

    <!-- Needed for Cordova/PhoneGap (will be a 404 during development) -->
    <script src="cordova.js"></script>
  </head>
  <body>
  </body>
</html>
```

Return to [Overview](#overview)

----

#### 3.1.1 Adding a Side-Menu Structure

Ionic provides several built-in **directives** to simplify client-side presentation and 
wiring up to back-end logic and data.

We'll use the `ion-side-menus` GUI element:

```html
<body>
  <ion-side-menus>
    <ion-side-menu-content>
    </ion-side-menu-content>
    <ion-side-menu side="left">
    </ion-side-menu>
  </ion-side-menus>
</body>
```

Return to [Overview](#overview)

----

#### 3.1.2 Initializing the App

**STEP 1**: We join the `index.html` presentation/declarative code with the AngularJS-driven controller logic in `js/app.js`:

```javascript
angular.module('todo', ['ionic']);
```

**STEP 2**: And we join that with this `ng-app` directive in the page:

```html
<body ng-app="todo">
```

**STEP 3**: The `index.html` now looks like this:

```html
<body ng-app="todo">
  <ion-side-menus>

    <!-- Center content -->
    <ion-side-menu-content>
      <ion-header-bar class="bar-dark">
        <h1 class="title">Todo</h1>
      </ion-header-bar>
      <ion-content>
      </ion-content>
    </ion-side-menu-content>

    <!-- Left menu -->
    <ion-side-menu side="left">
      <ion-header-bar class="bar-dark">
        <h1 class="title">Projects</h1>
      </ion-header-bar>
    </ion-side-menu>

  </ion-side-menus>
</body>
```

Return to [Overview](#overview)

----

### 3.2 Testing the App

We run `ionic` for testing in the browser this way:

`ionic serve`

or, on Cloud 9:

`ionic serve -p $PORT --nolivereload`

Return to [Overview](#overview)

----

#### 3.2.1 Results in a Browser

Most modern browsers will provide a means of "faking" the dimensions and behaviors of a device:

![Todo Shell App](http://i39.photobucket.com/albums/e188/ahuimanu/todo-shell-app_zpsth3ujioj.png)

If you are on a development machine (not in Cloud 9) you can run your app in the simulator/emulator:

```
ionic build android
ionic emulate android
```

Return to [Overview](#overview)

----

#### 3.2.2 Browser Developer Tools

There are useful tools/features in most popular browsers for viewing an emulation/simulation of screen resolution:

**key command**: `CTRL + SHIFT + I`

**Chrome**

![Chrome Developer Tools](http://i39.photobucket.com/albums/e188/ahuimanu/chrome-developer-tools_zpsp7jgduwx.png)

**Firefox**

![Firefox Developer Tools](http://i39.photobucket.com/albums/e188/ahuimanu/firefox-developer-tools_zpsbzwdmcdt.png)

**key command**: `F12`

**Edge**

![Edge Developer Tools](http://i39.photobucket.com/albums/e188/ahuimanu/edge-developer-tools_zpsp7uww5b7.png)

Return to [Overview](#overview)

----

#### Testing Native

You need developer accounts and tools in order to deploy to app stores or even test an app on your device.

* ios - you must use xCode to build the output from **Ionic**
* android - testing on your device is easy if you have debugging enables on your device:

`ionic run android`

Return to [Overview](#overview)

----

### 3.3 Completing the App

Again, let's keep the target in mind:

![iscap todo mockup](http://i39.photobucket.com/albums/e188/ahuimanu/todo-mockup_zpstquluqhj.png)

Return to [Overview](#overview)

----

#### 3.3.1 Ionic Extends AngularJS

It is important to remember that to use Ionic is to use AngularJS.

A deep grounding in Angular is beyond the scope of this workshop, however, here are some resources:

* [AngularJS](https://www.youtube.com/user/angularjs)
* [Egghead.io](https://egghead.io/lessons/angularjs-binding)
* [Thinkster.io](https://thinkster.io/a-better-way-to-learn-angularjs)
 
Return to [Overview](#overview)

----

#### 3.3.2 Using ng-repeat and an Angular Controller

Ionic uses controllers to further subdivide both the logic and presentation in an AngularJS/Ionic app.

**STEP 1**: We expand further the center content in our app:

```html
<!-- Center content -->
<!-- all of the ion-prefixed directives are unique to ionic -->
<ion-side-menu-content>
  <ion-header-bar class="bar-dark">
    <h1 class="title">Todo</h1>
  </ion-header-bar>
  <ion-content>
    <!-- our list and list items -->
    <ion-list>
      <!-- angular directive: ng-repeat -->
      <ion-item ng-repeat="task in tasks">
        <!-- angular expression for inserting data into the template -->
        {{task.title}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-side-menu-content>
```

**STEP 2**: Further, let's make a controller for the app:

```html
<body ng-app="todo" ng-controller="TodoCtrl">
```

Last, we expand our module to include the controller:

* The controller gives us access to the `$scope` object
* The `$scope` is a **glue** between the controller and template
* We get two-way binding with the `$scope`

**$scope as glue between controller and view**

![scope as glue](http://i39.photobucket.com/albums/e188/ahuimanu/ScopeisGlue_zpsfkroawmz.png)
 
**STEP 3**: We update `www/js/app.js` accordingly:

```javascript
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope) {
  $scope.tasks = [
    { title: 'Attend Ionic Workshop' },
    { title: 'Go to a buffet' },
    { title: 'Participate in a panel discussion' },
    { title: 'Go to a show' }
  ];
})
```

**STEP 4**: Results

![Preliminary Todos](http://i39.photobucket.com/albums/e188/ahuimanu/preliminary-todos_zpszs2erxug.png)

Return to [Overview](#overview)

----

#### 3.3.3 Relationship between View and Controller in AngularJS

![AngularJS Controller and View](http://i39.photobucket.com/albums/e188/ahuimanu/AngularJSOverview_zpswsloarmz.png)

Return to [Overview](#overview)

----

#### 3.3.4 Creating Tasks

**STEP 1**: Create an angular template using a script (this is placed just below the `ion-side-menu`):

We use templates to:

* modularize the application
* manage UIs by separating layouts

```html
<script id="new-task.html" type="text/ng-template">

  <div class="modal">

    <!-- Modal header bar -->
    <ion-header-bar class="bar-secondary">
      <h1 class="title">New Task</h1>
      <button class="button button-clear button-positive" ng-click="closeNewTask()">Cancel</button>
    </ion-header-bar>

    <!-- Modal content area -->
    <ion-content>

      <form ng-submit="createTask(task)">
        <div class="list">
          <label class="item item-input">
            <input type="text" placeholder="What do you need to do?" ng-model="task.title">
          </label>
        </div>
        <div class="padding">
          <button type="submit" class="button button-block button-positive">Create Task</button>
        </div>
      </form>

    </ion-content>

  </div>

</script>
```

Some noteworthy additions in the template code:

* we specify user action listening with the `ng-click` directive for `closeNewTask()`
* we do form handling with the `ng-sumbit` directive

**STEP 2**: Update center content to include a header bar with a button to view tasks.  We use the the ionic `ion-header-bar` directive.

```html
  <!-- Center content -->
  <ion-side-menu-content>
    <ion-header-bar class="bar-dark">
      <h1 class="title">Todo</h1>
      <!-- New Task button-->
      <button class="button button-icon" ng-click="newTask()">
        <i class="icon ion-compose"></i>
      </button>
    </ion-header-bar>
    <ion-content>
      <!-- our list and list items -->
      <ion-list>
        <ion-item ng-repeat="task in tasks">
          {{task.title}}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu-content>
```

Some noteworthy additions in the code above:

* we use `ng-click()` to handle user interaction
* we use the `<i>` element to incorporate iconography in our UI

**STEP 3**: Expanding our controller code:

```javascript
angular.module('todo', ['ionic'])

.controller('TodoCtrl', function($scope, $ionicModal) {
  // No need for testing data anymore
  $scope.tasks = [];

  // Create and load the Modal
  $ionicModal.fromTemplateUrl('new-task.html', function(modal) {
    $scope.taskModal = modal;
  }, {
    scope: $scope,
    animation: 'slide-in-up'
  });

  // Called when the form is submitted
  $scope.createTask = function(task) {
    $scope.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();
    task.title = "";
  };

  // Open our new task modal
  $scope.newTask = function() {
    $scope.taskModal.show();
  };

  // Close the new task modal
  $scope.closeNewTask = function() {
    $scope.taskModal.hide();
  };
})
```

**STEP 4**: Progress:

**Todo Main Screen**

![Todo Progress](http://i39.photobucket.com/albums/e188/ahuimanu/todos-progress_zpscl3jop3v.png)

**Modal Task Entry Form**

![Modal Task Entry Form](http://i39.photobucket.com/albums/e188/ahuimanu/todo-modal-form_zpsh7yx6mvv.png)

Return to [Overview](#overview)

----

#### 3.3.5 Adding Projects

We add the concept of a project so that todos can be organized.

**STEP 1**: Updating the content area markup:

```html
<!-- Center content -->
<ion-side-menu-content>
  <ion-header-bar class="bar-dark">
    <button class="button button-icon" ng-click="toggleProjects()">
      <i class="icon ion-navicon"></i>
    </button>
    <h1 class="title">{{activeProject.title}}</h1>
    <!-- New Task button-->
    <button class="button button-icon" ng-click="newTask()">
      <i class="icon ion-compose"></i>
    </button>
  </ion-header-bar>
  <ion-content scroll="false">
    <ion-list>
      <ion-item ng-repeat="task in activeProject.tasks">
        {{task.title}}
      </ion-item>
    </ion-list>
  </ion-content>
</ion-side-menu-content>
```

Noteworthy additions:

* we add an object for `activeProject`
* we contain the tasks list within the project

**STEP 2**: Update markup for the side menu (which will contain projects)

```html
  <!-- Left menu -->
  <ion-side-menu side="left">
    <ion-header-bar class="bar-dark">
      <h1 class="title">Projects</h1>
      <button class="button button-icon ion-plus" ng-click="newProject()">
      </button>
    </ion-header-bar>
    <ion-content scroll="false">
      <ion-list>
        <ion-item ng-repeat="project in projects" ng-click="selectProject(project, $index)" ng-class="{active: activeProject == project}">
          {{project.title}}
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-side-menu>
```

Noteworthy additions:

* The use of icon styles in an HTML control to show [ionicons](http://ionicons.com/)
* Use of the `ng-class` directive to emphasize the active project in the list
 
**STEP 3**: A factory service for the use of HTML5 Local Storage

```javascript
angular.module('todo', ['ionic'])
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
.factory('Projects', function() {
  return {
    all: function() {
      var projectString = window.localStorage['projects'];
      if(projectString) {
        return angular.fromJson(projectString);
      }
      return [];
    },
    save: function(projects) {
      window.localStorage['projects'] = angular.toJson(projects);
    },
    newProject: function(projectTitle) {
      // Add a new project
      return {
        title: projectTitle,
        tasks: []
      };
    },
    getLastActiveIndex: function() {
      return parseInt(window.localStorage['lastActiveProject']) || 0;
    },
    setLastActiveIndex: function(index) {
      window.localStorage['lastActiveProject'] = index;
    }
  }
})
```

Noteworthy additions above:

* we define named methods of the factory/service object
* `window.localStorage` is a reminder that this feature is client-/browser-specific
 
**STEP 4**: Additions to the Controller to facilitate adding, saving, and loading projects

```javascript
angular.module('todo', ['ionic'])
/**
 * The Projects factory handles saving and loading projects
 * from local storage, and also lets us save and load the
 * last active project index.
 */
.factory('Projects', function() {
//...
})

.controller('TodoCtrl', function($scope, $timeout, $ionicModal, Projects, $ionicSideMenuDelegate) {

  // A utility function for creating a new project
  // with the given projectTitle
  var createProject = function(projectTitle) {
    var newProject = Projects.newProject(projectTitle);
    $scope.projects.push(newProject);
    Projects.save($scope.projects);
    $scope.selectProject(newProject, $scope.projects.length-1);
  }


  // Load or initialize projects
  $scope.projects = Projects.all();

  // Grab the last active, or the first project
  $scope.activeProject = $scope.projects[Projects.getLastActiveIndex()];

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
    Projects.setLastActiveIndex(index);
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
    $scope.activeProject.tasks.push({
      title: task.title
    });
    $scope.taskModal.hide();

    // Inefficient, but save all the projects
    Projects.save($scope.projects);

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


  // Try to create the first project, make sure to defer
  // this by using $timeout so everything is initialized
  // properly
  $timeout(function() {
    if($scope.projects.length == 0) {
      while(true) {
        var projectTitle = prompt('Your first project title:');
        if(projectTitle) {
          createProject(projectTitle);
          break;
        }
      }
    }
  }, 1000);

})
```

Noteworthy additions above:

* Ionic/Angular uses dependency injection to pass in extra features/functionality to a controller
* The timeout pauses the app while the projects/tasks are loaded from local storage
 
**STEP 5**: Results

**Adding an Initial Project**

![Adding an Initial Project](http://i39.photobucket.com/albums/e188/ahuimanu/add-initial-project_zps7vmxktvm.png)

**Project Browser - List of Projects**

![List of Projects](http://i39.photobucket.com/albums/e188/ahuimanu/list-of-projects_zpsk3nhuqdc.png)

Return to [Overview](#overview)

----

#### 3.3.6 Checking Local Storage for Data

An HTML5-compliant browser will implement local storage as a better and expanded form of cookies.

Using Chrome's Developer tools (Key combo: `CTRL + SHIFT + I`), we can see local storage after running the app:

![Chrome Developer Tools Local Storage](http://i39.photobucket.com/albums/e188/ahuimanu/developer-tools-local-storage_zps0xwhki9b.png)

Return to [Overview](#overview)

----