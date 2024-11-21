const app = require('./server');
const db = require('./db');
const restaurantRoute = require('./routes/restaturantRoute');
// console.log(restaurantRoute);return false;
restaurantRoute(app);