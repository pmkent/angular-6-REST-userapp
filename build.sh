#! /bin/bash

echo "Starting pmk app"

mvn clean package -DskipTests=true

echo "Ending pmk app build..."
