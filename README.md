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
  * 2.2 Project Seed
* 3.0 Angular Basics
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
* 7.0 Conclusion

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

[Overview](#overview)

---

### 2.1 Environment

For today's workshop, there are three main approaches that can be used to run Ionic:

* local
* [Cloud 9](https://c9.io): web-based IDE and Host environment - this is my own general preference
* [Plunker](https://plnkr.co): online code editor - we'll use this because it is easy to use in this setting
* 

### 2.2 Project Seeding

We seed projects with the `ionic` command-line tool.  We can choose from the following starter templates:

* `ionic start app_name blank`
* `ionic start app_name tabs`
* `ionic start app_name sidemenu`