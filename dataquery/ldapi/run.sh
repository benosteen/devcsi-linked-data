#!/bin/bash
#
# Run ELDA with specified API definition file
#
# $1 = name of API description file
#      cf. http://code.google.com/p/linked-data-api/wiki/API_Formatting_Graphs

CURDIR=`pwd`
ELDADIR="/Users/graham/DevTools/Elda-0.9.12"
java -jar $ELDADIR/elda-0.9.12-SNAPSHOT.jar -Delda.spec=$CURDIR/education-min.ttl
