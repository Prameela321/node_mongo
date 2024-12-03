const logUser = (req,res,next)=>{
    console.log("testing application level middleware");
    next();
}

const routeUser = (req,res,next)=>{
    console.log("testing the route level middleware");
    next();
}

module.exports = {
    logUser : logUser,
    routeUser : routeUser
}