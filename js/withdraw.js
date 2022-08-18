document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputValue = getInputFeildValueById('withdraw-field');

    if(isNaN(inputValue)){
        alert('Type a amount');
        return;
    }

    const previousElement =  getElementValueById('withdraw-total');
    const previousTotalValue = getElementValueById('balance-total');

    if(inputValue > previousTotalValue){
        alert(`you don't have that much money`);
        return;
    }
    
    //set the element value
    const newWithdrawValue = inputValue + previousElement;
    setTextElementValueById('withdraw-total', newWithdrawValue);

    //set the total value
    const newTotalvalue = previousTotalValue - inputValue;
    setTextElementValueById('balance-total', newTotalvalue);

})