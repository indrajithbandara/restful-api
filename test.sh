echo "posting request..."

param = $1

echo "you entered $1 \n"

######### CITY RELATED #############
#TODO: all of this


######### RESTAURANT RELATED #############

#create item
curl --data "name=Jack in the Box&description=fast food joint, larry david went there in curb" http://107.170.230.36:8080/api/restaurants

echo "getting list of all restaurants \n"

#get all restaurants
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/

#get single restaurant by id
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/57871af34c275b04092d39ca

#update entry
curl -i -H "Accept: application/json" -X PUT -d "name=In-n-Out" http://107.170.230.36:8080/api/restaurants/57871af34c275b04092d39ca

#delete entry
curl -i -H "Accept: application/json" -X DELETE http://107.170.230.36:8080/api/restaurants/57871ad14c275b04092d39c9


######### RESTAURANT / DISH ASSOCIATIONS #############

#add dish to restaurant
curl -i -H "Accept: application/json" -X PUT -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/57871d6eb6f9f31209e32b4d

#get all restaurants with a particular dish
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/restaurants/dishes/57871d6eb6f9f31209e32b4d

#delete association
curl -i -H "Accept: application/json" -X DELETE -d "restaurant=57871af34c275b04092d39ca" http://107.170.230.36:8080/api/restaurants/dishes/578718a4a5ed538208adb025

######### DISH RELATED #############

#create item
curl --data "name=Hamburger&cuisine=American" http://107.170.230.36:8080/api/dishes

#get all dishes
curl -i -H "Accept: application/json" -H "Content-Type: application/json" -X GET http://107.170.230.36:8080/api/dishes/

#TODO: delete item
#THIS WILL REQUIRE MIDDLEWARE TO CLEAN UP ALL ASSOCIATIONS
