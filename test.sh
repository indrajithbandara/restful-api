echo "posting request..."

param = $1

echo "you entered $1"

curl --data "name=$1" http://192.168.33.10:8080/api/restaurants

echo "getting list of all restaurants"
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://192.168.33.10:8080/api/restaurants
