//get the input value
function getInputFeildValueById(inputId){
    const inputValue = document.getElementById(inputId);
    const inputValueString = inputValue.value;
    const newInputValue = parseFloat(inputValueString);
    inputValue.value = '';
    return newInputValue;
}

//get the element vlaue
function getElementValueById(elementId){
    const elementIdValue = document.getElementById(elementId);
    const elementValueString = elementIdValue.innerText;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

//reset the element valuej
function setTextElementValueById(elementId, newValue){
    const newElementvalue = document.getElementById(elementId);
    newElementvalue.innerText = newValue;
} 