echo "posting request..."

param = $1

echo "you entered $1 \n"

#create item
curl --data "name=Jack in the Box" http://192.168.33.10:8080/api/restaurants

echo "getting list of all restaurants \n"

#get all restaurants
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://192.168.33.10:8080/api/restaurants/

#get single restaurant by id
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://192.168.33.10:8080/api/restaurants/5787053e390f72d406fe6c58

#update entry
curl -i -H "Accept: application/json" -X PUT -d "name=In-n-Out" http://192.168.33.10:8080/api/restaurants/5787053e390f72d406fe6c58

#delete entry
curl -i -H "Accept: application/json" -X DELETE http://192.168.33.10:8080/api/restaurants/57871860a5ed538208adb024
