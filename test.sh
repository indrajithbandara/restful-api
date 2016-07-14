echo "posting request..."

param = $1

echo "you entered $1 \n"

curl --data "name=$1" http://192.168.33.10:8080/api/restaurants

echo "getting list of all restaurants \n"
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://192.168.33.10:8080/api/restaurants/5787053e390f72d406fe6c58

curl -i -H "Accept: application/json" -X PUT -d "name=In-n-Out" http://192.168.0.165/persons/person/1  
