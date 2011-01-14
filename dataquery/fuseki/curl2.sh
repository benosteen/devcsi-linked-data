echo "===== SEND SPARQL QUERY ====="

echo "#" >query.sparql
#echo "SELECT * WHERE { ?s ?p ?o } LIMIT 10" >>query.sparql

cp zodiac-prefixes.txt query.sparql

# List all zodiac signs assiated with the element "Air"

echo "SELECT ?s ?desc WHERE" >> query.sparql
echo "  { ?s foaf:name 'Libra'" >> query.sparql
echo "     ; dcterms:description ?desc" >> query.sparql
echo "  }" >> query.sparql

curl http://localhost:3030/dataset/query -H "accept: application/sparql-results+json" --data-urlencode query@query.sparql

curl http://localhost:3030/dataset/query -H "accept: text/plain" --data-urlencode query@query.sparql

