
FROM eclipse-temurin:17-jdk

WORKDIR /opt

COPY target/*.jar /opt/app.jar

ENTRYPOINT ["java", "-jar", "/opt/app.jar"]
