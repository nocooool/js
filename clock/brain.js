const clock = document.getElementById('clock');
//const clock = document.querySelector('#clock'); both mehtods can be used

//setInterval(function(){} , 1000) takes to argument one function and another the interval time 
setInterval(()=> {
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
}, 1000);

//use the interval for the basic tasks like this