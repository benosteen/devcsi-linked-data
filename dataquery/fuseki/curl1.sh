echo "===== SEND SPARQL QUERY ====="

echo "#" >query.sparql
echo "SELECT * WHERE { ?s ?p ?o } LIMIT 10" >>query.sparql

curl http://localhost:3030/dataset/query -H "accept: application/sparql-results+json" --data-urlencode query@query.sparql

curl http://localhost:3030/dataset/query -H "accept: text/plain" --data-urlencode query@query.sparql

