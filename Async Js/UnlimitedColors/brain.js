const changeColor = function(){
    const hex = '0123456789ABCDEF';
    let color = '#';
    for(let i=0; i<6 ;i++){
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let random;
const startIt = function(){
    if(!random){
        random = setInterval(bg, 1000);
    }
    function bg(){
        document.body.style.backgroundColor = changeColor();
    }
}

const stopIt = function(){
    clearInterval(random);
    random = null; // flush out (dereferencing)
}

document.querySelector('#start').addEventListener('click', startIt);
document.querySelector('#stop').addEventListener('click', stopIt);