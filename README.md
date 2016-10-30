# ISCAP IONIC WORKSHOP

LV, November 2016

----

# Overview 

* 1.0 [Hybrid Apps](#10hybrid-apps)
  * 1.1 Ionic Framework
  * 1.2 Apache Cordova
* 2.0 [Ionic Basics](#20ionic-basics)
  * 2.1 [Environment](#21-environment)
    * 2.1.1 Local
    * 2.1.2 Cloud 9 ([https://c9.io](https://c9.io))
    * 2.1.3 Plunker ([https://plnkr.co](https://plnkr.co))
    * 2.1.4 Ionic Playground ([http://play.ionic.io/](http://play.ionic.io/))
  * 2.2 Project Seed
  * Ionic Codepen Demos
* 3.0 Angular and Ionic Basics
  * 3.1 Directives
  * 3.2 Views
  * 3.3 Models
  * 3.4 Controllers
  * 3.5 Services
* 4.0 NoSQL Document Persistence
  * 4.1 Firebase ([https://firebase.io](https://firebase.io))
* 5.0 Example - The Ionic Book
  * 5.1 Starting the App
  * 5.2 Testing the App
  * 5.3 Completion
  * 5.4 Publishing
  * 5.5 Firebase
* 6.0 Ionic Services
  * 6.1 Ionic Creator
  * 6.2 Ionic Cloud
  * 6.3 Ionic Lab
* 7.0 Packing with Ionic Cloud
* 8.0 Conclusion

----

[Overview](#overview)

## Hybrid Apps

![Hybrid Native Apps](http://i39.photobucket.com/albums/e188/ahuimanu/native_html_hybrid_apps_zpsof5lyoh7.jpg)

(Credit: [https://webscope.co.nz](https://webscope.co.nz))

### Ionic Framework

![Ionic Framework](http://i39.photobucket.com/albums/e188/ahuimanu/build-consumer-apps-using-mobile-sdk-and-ionic-framework_zpsgc3plqic.jpg)

### Apache Cordova

![Apache Cordova](http://i39.photobucket.com/albums/e188/ahuimanu/apache-cordova-4-638_zpsjgbemdvh.jpg)

[Overview](#overview)

----

## Ionic Basics

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

### 2.2 Project Seeding

We seed projects with the `ionic` command-line tool.  We can choose from the following starter templates:

* `ionic start app_name blank`
* `ionic start app_name tabs`
* `ionic start app_name sidemenu`

Return to [Overview](#overview)

### 2.3 Ionic Codepen Demos

[Ionic Codepen Demos](http://codepen.io/ionic/pens/public/)

Return to [Overview](#overview)

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

We run `ionic` for testing in the browser this way:

`ionic serve`

or, on Cloud 9:

`ionic serve -p $PORT --nolivereload`

Return to [Overview](#overview)