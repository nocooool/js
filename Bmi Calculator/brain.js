const form = document.querySelector('form');
//this usecase will give the empty value
//const height = parseInt(document.querySelector('#height'))

form.addEventListener('submit', function(e) {
    e.preventDefault();//to stop any initial activity like submition

    const height = parseInt(document.querySelector('#height').value); //paseInt is used to convert the obtained value into int 
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result');
    const conc = document.querySelector('#conclusion')

    //error check
    if(height === '' || height < 0 || isNaN(height)){
        result.innerHTML = `please give a valid height value ${height}`;
    }
    else if(weight === '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `please give a valid weight value ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);
        if(bmi < 18.6){
            result.innerHTML = `<span>${bmi}</span> <br> you are under weight`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            result.innerHTML = `<span>${bmi}</span> <br> you are in normal range`;
        }
        else{
            result.innerHTML = `<span>${bmi}</span> <br> you are over weight`;
        }
    }
    
});