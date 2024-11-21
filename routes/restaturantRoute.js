const restaurantController = require('../controllers/restaurantController')
function restaurantRoutes(app){
    app.post('/createRestaurant',restaurantController.createRestaurant);
}
module.exports =  restaurantRoutes;