# ISCAP IONIC WORKSHOP

LV, November 2016

----

# Overview 

* 1.0 [Hybrid Apps](#10-hybrid-apps)
  * 1.1 [Ionic Framework](#11-ionic-framework)
  * 1.2 [Apache Cordova](#12-apache-cordova)
* 2.0 [Ionic Basics](#20-ionic-basics)
  * 2.1 [Environment](#21-environment)
  * 2.2 [Project Seed](#23-project-seed)
  * 2.3 [Ionic Codepen Demos](#23-ionic-codepen-demos)
* 3.0 Todo Exampe (The Ionic Book)
  * 3.1 Starting the App
  * 3.2 Testing the App
  * 3.3 Completion
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

We run `ionic` for testing in the browser this way:

`ionic serve`

or, on Cloud 9:

`ionic serve -p $PORT --nolivereload`

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