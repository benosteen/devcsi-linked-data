echo " ====== SPARQL QUERY ========"

echo # >query.sparql
echo SELECT * WHERE { ?s ?p ?o } LIMIT 10 >>query.sparql

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
