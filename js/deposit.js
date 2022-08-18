//button event handler
document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputValue = getInputFeildValueById('deposit-feild');//input feild value
    
    // if the value is NaN 
    if(isNaN(inputValue)){
        alert('Type a amount');
        return;
    }
    
    const elementValue = getElementValueById('deposit-total');//deposit element vlaue
    const totalElementvalue = getElementValueById('balance-total');//total amount value
    
    //calculate deposit element
    const newDepositTotal = inputValue + elementValue;
    setTextElementValueById('deposit-total', newDepositTotal);

    //calculate newtotal value
    const newTotalValue = totalElementvalue + inputValue;
    setTextElementValueById('balance-total', newTotalValue);

})