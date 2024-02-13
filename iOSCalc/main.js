const dspl = document.getElementById("dspl");

function appendTodspl(input){
    dspl.value += input;

}

function cleardspl(){
    dspl.value = "";

}

function calculate(){
    try{
        dspl.value = eval(dspl.value);
    }
    catch(error){
        dspl.value = "Invalid";
    }
} 

const clearButton = document.getElementById("clear");

clearButton.addEventListener('click', () => {
  cleardspl(); 
});