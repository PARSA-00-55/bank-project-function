document.getElementById('btn-withdraw').addEventListener('click', function(){
    const inputValue = getInputFeildValueById('withdraw-field');//input feild value

    //if the input value is NaN
    if(isNaN(inputValue)){
        alert('Type a amount');
        return;
    }

    const previousElement =  getElementValueById('withdraw-total');//withdraw element value
    const previousTotalValue = getElementValueById('balance-total');//total amount value


    //if input amount is grater than the previous amount
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