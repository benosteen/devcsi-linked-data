Linked data API

See:
* http://code.google.com/p/linked-data-api/
* http://code.google.com/p/linked-data-api/wiki/Overview


== Linked data API setup ==

Prerequisite: Java

Download per http://elda.googlecode.com/hg/deliver-elda/src/main/docs/dev8d2011-presentation/p000-and-so-it-begins.html

  hg clone https://elda.googlecode.com/hg/ elda
or ready-to-go Jar at
  http://code.google.com/p/elda/downloads/list

To run (e.g.):

java -jar elda-0.9.12-SNAPSHOT.jar
cd Elda* ; java -jar start.jar
java -Djetty.port=28059 -jar start.jar
java -Delda.spec=SPEC1,SPEC2 -jar start.jar

After fitst run, look in webapp/spec directory for LDA specification file

 Vocabulary (properties and types) need to be declared

See minimum config based on education example...

