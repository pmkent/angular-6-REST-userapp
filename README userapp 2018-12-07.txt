2018-12-07

http://localhost:8080/api/user

To change context to /pmk
1. Change pom.xml to reflect <contextPath>/pmk</contextPath>
2. Change <ROOT>\encunciate.xml to reflect <swagger basePath="/pmk/api/"/>
3. Build angular 2 ui using ng build --base-href /pmk/
4. Rebuild app using \userapp>mvn clean package -Penunciate
5. Go to http://localhost:8080/restapi/ui and http://localhost:8080/pmk

An app to experiment with Angular 6 user CRUD app

mvn archetype:generate -DgroupId=com.pmk.app -DartifactId=userapp -DarchetypeArtifactId=maven-archetype-webapp -DinteractiveMode=false

ng build --base-href /pmk/
ng build --bh /pmk/
ng build --prod --bh /pmk/

mvn clean package -Pssl
mvn jetty:run

mvn clean package
mvn jetty:run