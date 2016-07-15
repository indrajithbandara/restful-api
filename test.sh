echo "posting request..."

param = $1

echo "you entered $1 \n"

######### CITY RELATED #############
#get all cities
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/cities/

#create city
curl --data "name=Tokyo" http://107.170.230.36:8080/api/cities

#get single city by id
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/cities/57886580a6302d5b426d74e3

#update entry
curl -i -H "Accept: application/json" -X PUT -d "name=Capetown" http://107.170.230.36:8080/api/cities/578816e63d0739fa3f87c048

#delete entry
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/cities/5787f4e87d1c4b403ea0a371

######### CITY / RESTAURANT ASSOCIATIONS #############

#add restaurant to city
curl -i -H "Accept: application/json" -X PUT -d "city=57886580a6302d5b426d74e3" http://107.170.230.36:8080/api/cities/restaurants/5788474ca6302d5b426d74e2

#get all restaurants with a particular dish
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/dishes/5787bd02d5a50f453a12704c

#delete association
curl -i -H "Accept: application/json" -X DELETE -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/578718a4a5ed538208adb025

######### RESTAURANT RELATED #############

#create item
curl --data "name=Jack in the Box&description=fast food joint, larry david went there in curb" http://107.170.230.36:8080/api/restaurants

echo "getting list of all restaurants \n"

#get all restaurants
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/

#get single restaurant by id
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/5787bd02d5a50f453a12704c

#update entry
curl -i -H "Accept: application/json" -X PUT -d "name=In-n-Out" http://107.170.230.36:8080/api/restaurants/5787f7ef18857cde3ef00479

#delete entry
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/restaurants/57871ad14c275b04092d39c9


######### RESTAURANT / DISH ASSOCIATIONS #############

#add dish to restaurant
curl -i -H "Accept: application/json" -X PUT -d "restaurant=5787f7ef18857cde3ef00479" http://107.170.230.36:8080/api/restaurants/dishes/5788474ca6302d5b426d74e2

#get all restaurants with a particular dish
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/dishes/5787bd02d5a50f453a12704c

#delete association
curl -i -H "Accept: application/json" -X DELETE -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/578718a4a5ed538208adb025

######### DISH RELATED #############

#create item
curl --data "name=Shrimp&cuisine=Seafood" http://107.170.230.36:8080/api/dishes

#get all dishes
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/dishes/

#get specific dishes
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/dishes/5788474ca6302d5b426d74e2

#delete item
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/dishes/57871ad14c275b04092d39c9
