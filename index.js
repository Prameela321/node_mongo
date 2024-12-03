const app = require('./server');
const db = require('./db');
const restaurantRoute = require('./routes/restaturantRoute');
const userRoutes = require('./routes/userRoutes');
const testRoute = require('./middleware/middlewareTest');
// console.log(restaurantRoute);return false;
app.use(testRoute.logUser);
restaurantRoute(app);
userRoutes(app);
