echo ==== SEND SPARQL QUERY =====

echo # >query.sparql

copy zodiac-prefixes.txt query.sparql

echo SELECT ?s ?desc WHERE >> query.sparql
echo { ?s foaf:name 'Libra' >> query.sparql
echo ; dcterms:description ?desc >> query.sparql
echo } >> query.sparql

curl http://localhost:3030/ds/query -H "accept: application/sparql-results+json" --data-urlencode query@query.sparql

curl http://localhost:3030/ds/query -H "accept: text/plain" --data-urlencode query@query.sparql
