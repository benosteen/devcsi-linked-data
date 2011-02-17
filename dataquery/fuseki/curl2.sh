echo "===== SEND SPARQL QUERY ====="

echo "#" >query.sparql
#echo "SELECT * WHERE { ?s ?p ?o } LIMIT 10" >>query.sparql

cp zodiac-prefixes.txt query.sparql

# List all zodiac signs assiated with the element "Air"

echo "SELECT ?s ?desc WHERE" >> query.sparql
echo "  { ?s foaf:name 'Libra'" >> query.sparql
echo "     ; dcterms:description ?desc" >> query.sparql
echo "  }" >> query.sparql

# NOTE:
# The "dataset" component in the following CURL URIs must match the name of the 
# fuseki dataset to which the RDF data has been loaded.

DATASET=dataset

# XML results
curl http://localhost:3030/$DATASET/query --data-urlencode query@query.sparql

# JSON results
curl http://localhost:3030/$DATASET/query -H "accept: application/sparql-results+json" --data-urlencode query@query.sparql

# Plain text tabular results
curl http://localhost:3030/$DATASET/query -H "accept: text/plain" --data-urlencode query@query.sparql

# End.
