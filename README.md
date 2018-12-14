# angular-6-REST-userapp
User CRUD application built using Angular 6 front end Java REST backend. This userapp starts off with a login and user registration pages that are not restricted. Once logged in you'll able to view user list, add a user, delete a user, logout.

* Login page if your user information already exists in the database. Otherwise, login as userone@gmail.com : password
* Currently the application uses a fake database using Java Map of user objects. There is plans in the future to use a MongoDB user collection database.
* The Jetty application server is created from jar files on the fly by a Maven command [ mvn jetty:run ]. It starts then deploys the userapp web application from the files in the webapp folder.
* To access the deployed application, on a browser go to the URL http://localhost:8080 This will bring you to the login page since you are not yet logged. There is a Register button to register a new user if you want to log in as yourself.
* Log in as Email: userone@gmail.com Password: password or click on the 'Register' button to register a new user using email, first name, last name and a password. You can then log in as this user you have just registered.
* The Menu button on the top right gives you the ability to go to the Login, Register, Add User, Edit User, User list, Logout. Note that, when you are not logged in you can only access the Login and Registration pages.
* To test the REST backend endpoints user the Html UI created using http://localhost:8080/restapi/ui Make sure to run the command [ mvn clean package -Penunciate ] from the userapp application root folder to create the REST UI.
* Once logged in you can view the users in the database in a list, edit a user, delete a user. You can also Add a new user, logout. The menu on the top right gives you the ability to navigate to different app pages.
* All users can toggle between two theme colors by using the menu item 'Toggle Theme'

How it works:
* The Jetty application server is started from CLI. Jetty starts, deploys the Angular 6 front end and the Java REST endpoints.
* When a user interacts with the front end for instance logging in, a rest call with the url pattern http://localhost:8080/api/user is invoked that calls the backend for authentication, user data.
* Authenticated users can view, add, edit user(s). Non authenticated users can only interract with the login and the register screens.
* The application comes with 3 fake users - userone@gmail.com, usertwo@gmail.com and userthree@gmail.com To log in as any of the three users user their email and 'password ' as your password. There is a hint on the login page about this.
* There are three roles - ADMIN, USER and GUEST
* Logging in as as user with the ADMIN role allows you access to all screens including listing all users in the application. Logging in as a user with USER role allows you to view all users in the application who do not have the ADMIN role. Logging in as a user with GUEST role allows you to view only your user information.
* userone@gmail.com has the the ADMIN role. usertwo@gmail.com has the USER role. userthree@gmail.com has the GUEST role.
* You can also add a new user using the 'Register' screen or the 'Add User' screen. Remember, you have to be logged in to user the 'Add User' screen while the 'Register' screen is available to anyone.

Build:
* Build the Angular 6 front end and the Java backend separately
* To build the Angular 6 Front end use the command < ng build --base-href / > . This creates a folder /dist/userapp that contains all the files required to run the application. This can also be accomplished by invoking the built.bat batch file. Copy these files into the Jetty /webapp folder.
* To build the Java code run the command [ mvn clean package ]. This running build.bat on commandline from the userapp root directory invokes the same command.
* To run the entire application use the command [ mvn jetty:run ]. This command can simply be invoked from the /userapp root folder using the build.bat or build.sh scripts. Once the application is successfully started it can be viewed at http://localhost:8080 

Documentation:
* In the /userapp/doc folder are screenshots of different Angular 6 CRUD user application.

Next Steps:
* Replace hard coded data with database calls with a MongoDB user collection.
* Theme color toggle control. DONE
* Protect REST service with a call filter that only allows permission to get to the backend or returns the call back to the front end and displays the login page. Note that page security through Angular front end is already implements. This is an extra layer of security.
* Unix .sh files evivalent of the batch files for building and running the applications.

Tools:
* Jetty Web Application Server
* Enunciate REST service test Url
* SHA-256 message digest password one way encryption
* Chrome browser Development tools
* Jersey JAVA REST services
* Visual Studio Code for Angular development
* IntelliJ IDEA IDE for Java REST backend development

Technologies:
* Angular 6
* Angular Material Design
* Java 8
* JWT Security
* JAVA Jersey REST services.
* Angular ReactiveForms
* Angular Material theming.

IDEs
* Visual Studio Code
* IntelliJ IDEA
* Editplus
* Windows 10 CLI
* Chrome google browser development tools

Commands used to develop the application(s):

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
