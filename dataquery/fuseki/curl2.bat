echo ==== SEND SPARQL QUERY =====

echo # >query.sparql

copy zodiac-prefixes.txt query.sparql

echo SELECT ?name ?desc WHERE >> query.sparql
echo { ?s occult:correspondsTo element:Air >> query.sparql
echo ; foaf:name ?name >> query.sparql
echo ; dcterms:description ?desc >> query.sparql
echo } >> query.sparql

REM NOTE:
REM The "dataset" component in the following CURL URIs must match the name of the 
REM fuseki dataset to which the RDF data has been loaded.

SET DATASET=dataset

REM XML results
curl http://localhost:3030/%DATASET%/query --data-urlencode query@query.sparql

REM JSON results
curl http://localhost:3030/%DATASET%/query -H "accept: application/sparql-results+json" --data-urlencode query@query.sparql

REM Plain text tabular results
curl http://localhost:3030/%DATASET%/query -H "accept: text/plain" --data-urlencode query@query.sparql

REM End.
