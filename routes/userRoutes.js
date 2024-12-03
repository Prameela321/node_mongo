const userController = require('../controllers/userController');
const  testMiddleware = require('../middleware/middlewareTest');

const userRoutes = (app)=>{
   app.post('/registerUser',userController.userRegister);
   app.post('/login',testMiddleware.routeUser,userController.login);
}

module.exports = userRoutes;