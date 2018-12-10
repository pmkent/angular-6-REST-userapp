2018-12-09

-Login page if your user information is already in the 
-Fake database using Java Map of user objects.

Build:
-Build the Angular 6 front end and the Java backend separately
-To build the Angular 6 Front end use the command < ng build --base-href / > . This creates a folder /dist/userapp that contains all the files required to run the application. This can also be accomplished by invoking the built.bat batch file. Copy these files into the Jetty /webapp folder.
-To build the Java code

Next Steps:
-Replace hard coded data with database calls.
-Theme color toggle control.
-Protect REST service with a call filter that only allows permission to get to the backend or returns the call back to the front end and displays the login page. Note that page security through Angular front end is already implements. This is an extra layer of security.

Tools:
-Jetty Web Application Server
-Enunciate REST service test Url
-SHA-256 message digest password one way encryption

Technologies:
Angular 6
Java 8

IDEs
-Visual Studio Code
-IntelliJ IDEA
-Editplus
-Windows 10 CLI

ng generate service service/auth-guard --module=app
ng generate service service/auth --module=app

2018-12-08

ng generate component pages/security/registration --module=app

2018-12-06

ng generate service service/InMemoryData --module=app  -- NOT WORKING in Angular 6
npm install angular-in-memory-web-api --save  -- NOT WORKING in Angular 6
ng generate class model/in-memory-data-service  -- NOT WORKING in Angular 6

ng generate component pages/header --module=app
ng generate component pages/footer --module=app

Add this import statement to app.module.ts to facilitate some Angular Material Animations:
import 'hammerjs';

Add this to styles.css to determine the prebuilt Angular Material theme:
@import "~@angular/material/prebuilt-themes/indigo-pink.css";

Add this to index.html to enable use of Angular Material Icons
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

npm install --save @angular/material @angular/cdk @angular/animations
ng generate module angular-material --flat --module=app
npm install --save hammerjs

2018-12-05

ng generate class model/user

ng generate service service/user --module=app

ng generate component pages/security/login --module=app
ng generate component pages/user/add-user --module=app
ng generate component pages/user/edit-user --module=app
ng generate component pages/user/list-user --module=app

/app/pages/user/add-user
/app/pages/user/edit-user
/app/pages/user/list-user

/app/pages/security/login/
/app/pages/security/registration/

/app/model/user.model.ts

/app/service/

/app/app.component.css
/app/app.component.html
/app/app.component.spec.ts
/app/app.component.ts
/app/app.module.ts

/app/app.routing.ts /app/app-routing.module.ts

ng serve --open

https://www.devglan.com/angular/angular-6-example

ng new userapp

\angular2>ng new userapp
? Would you like to add Angular routing? Yes
? Which stylesheet format would you like to use? CSS
CREATE userapp/angular.json (3777 bytes)
CREATE userapp/package.json (1306 bytes)
CREATE userapp/README.md (1024 bytes)
CREATE userapp/tsconfig.json (435 bytes)
CREATE userapp/tslint.json (2837 bytes)
CREATE userapp/.editorconfig (246 bytes)
CREATE userapp/.gitignore (576 bytes)
CREATE userapp/src/favicon.ico (5430 bytes)
CREATE userapp/src/index.html (294 bytes)
CREATE userapp/src/main.ts (372 bytes)
CREATE userapp/src/polyfills.ts (3234 bytes)
CREATE userapp/src/test.ts (642 bytes)
CREATE userapp/src/styles.css (80 bytes)
CREATE userapp/src/browserslist (388 bytes)
CREATE userapp/src/karma.conf.js (980 bytes)
CREATE userapp/src/tsconfig.app.json (166 bytes)
CREATE userapp/src/tsconfig.spec.json (256 bytes)
CREATE userapp/src/tslint.json (314 bytes)
CREATE userapp/src/assets/.gitkeep (0 bytes)
CREATE userapp/src/environments/environment.prod.ts (51 bytes)
CREATE userapp/src/environments/environment.ts (662 bytes)
CREATE userapp/src/app/app-routing.module.ts (245 bytes)
CREATE userapp/src/app/app.module.ts (393 bytes)
CREATE userapp/src/app/app.component.html (1152 bytes)
CREATE userapp/src/app/app.component.spec.ts (1098 bytes)
CREATE userapp/src/app/app.component.ts (211 bytes)
CREATE userapp/src/app/app.component.css (0 bytes)
CREATE userapp/e2e/protractor.conf.js (752 bytes)
CREATE userapp/e2e/tsconfig.e2e.json (213 bytes)
CREATE userapp/e2e/src/app.e2e-spec.ts (299 bytes)
CREATE userapp/e2e/src/app.po.ts (204 bytes)
npm WARN deprecated circular-json@0.5.9: CircularJSON is in maintenance only, flatted is its successor.

> node-sass@4.10.0 install \userapp\node_modules\node-sass
> node scripts/install.js

Cached binary found at \npm-cache\node-sass\4.10.0\win32-x64-67_binding.node

> node-sass@4.10.0 postinstall \userapp\node_modules\node-sass
> node scripts/build.js

Binary found at \userapp\node_modules\node-sass\vendor\win32-x64-67\binding.node
Testing binary
Binary is fine
npm WARN optional SKIPPING OPTIONAL DEPENDENCY: fsevents@1.2.4 (node_modules\fsevents):
npm WARN notsup SKIPPING OPTIONAL DEPENDENCY: Unsupported platform for fsevents@1.2.4: wanted {"os":"darwin","arch":"any"} (current: {"os":"win32","arch":"x64"})

added 1125 packages from 1176 contributors and audited 40177 packages in 162.408s
found 0 vulnerabilities

*** Please tell me who you are.

Run

  git config --global user.email "you@example.com"
  git config --global user.name "Your Name"

to set your account's default identity.
Omit --global to set the identity only in this repository.

\angular2>