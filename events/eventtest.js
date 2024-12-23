const EventEmitter =  require('events');
const eventObj = new EventEmitter();


// register an event
eventObj.on('eventName',()=>{
    console.log("testing event module");
})


eventObj.emit('eventName');