document.getElementById('btn-deposit').addEventListener('click', function(){
    const inputValue = getInputFeildValueById('deposit-feild');
    
    if(isNaN(inputValue)){
        alert('Type a amount');
        return;
    }
    
    const elementValue = getElementValueById('deposit-total');
    const totalElementvalue = getElementValueById('balance-total');
    
    //calculate deposit element
    const newDepositTotal = inputValue + elementValue;
    setTextElementValueById('deposit-total', newDepositTotal);

    //calculate newtotal value
    const newTotalValue = totalElementvalue + inputValue;
    setTextElementValueById('balance-total', newTotalValue);

})