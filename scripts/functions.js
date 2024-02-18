const inputElement = document.getElementById('phone');
const buttonElement = document.getElementById('buy-btn');
//console.log(buttonElement);

function numberVarify(){
    inputElement.addEventListener('input', function(event){
        const length= isValidPhoneNumber();
        if(length>3){
            buttonElement.disabled= false;
        }    
        else{
            buttonElement.disabled= true;
        } 
    })}

    function isValidPhoneNumber(){
        const inputValue = inputElement.value;
        const length = inputValue.length;
        return length;
    }

