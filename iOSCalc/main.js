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

let currentValue = '';
let operator = null; 

function updateDisplay(number) {
  currentValue += number;
  document.getElementById('display').value = currentValue;
}

const clearButton = document.getElementById("clear");

clearButton.addEventListener('click', () => {
  cleardspl(); 
});

const allButtons = document.querySelectorAll('button');

allButtons.forEach(button => {
  button.addEventListener('click', handleButtonClick); 
});

function handleButtonClick(event) {

  const value = event.target.textContent;
  
  if (isNumber(value)) {
    appendTodspl(value);
  } 
}