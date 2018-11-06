var events = require('events');

var myEmmitter = new events.EventEmitter();

myEmmitter.on('clicked',function(msg){
    console.log(msg);
});

