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
curl -i -H "Accept: application/json" -X PUT -d "city=[PLACE CITY ID HERE]" http://107.170.230.36:8080/api/cities/restaurants/[PLACE RESTAURANT ID HERE]

#get all cities with a particular restaurant
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/dishes/5787bd02d5a50f453a12704c

#delete association
curl -i -H "Accept: application/json" -X DELETE -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/578718a4a5ed538208adb025

######### RESTAURANT RELATED #############

#create item
curl --data "name=delete this" http://107.170.230.36:8080/api/restaurants

echo "getting list of all restaurants \n"

#get all restaurants
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/

#get single restaurant by id
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/5788699ccbc86c0a446233fb

#update entry
curl -i -H "Accept: application/json" -X PUT -d "name=Pappy's Smokin' Barbeque" http://107.170.230.36:8080/api/restaurants/5788699ccbc86c0a446233fb

#delete entry
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/restaurants/578846e4a6302d5b426d74e1


######### RESTAURANT / DISH ASSOCIATIONS #############

#add dish to restaurant
curl -i -H "Accept: application/json" -X PUT -d "restaurant=5788699ccbc86c0a446233fb" http://107.170.230.36:8080/api/restaurants/dishes/5788474ca6302d5b426d74e2

#get all restaurants with a particular dish
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/dishes/5787bd02d5a50f453a12704c

#delete association
curl -i -H "Accept: application/json" -X DELETE -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/578718a4a5ed538208adb025

######### DISH RELATED #############

#create item
curl --data "name=Pulled Pork&cuisine=BBQ" http://107.170.230.36:8080/api/dishes

#get all dishes
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/dishes/

#get specific dishes
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/dishes/5788474ca6302d5b426d74e2

#delete item
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/dishes/57871ad14c275b04092d39c9
