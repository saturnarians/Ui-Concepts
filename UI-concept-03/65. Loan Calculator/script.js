// - - - function payLoan() - - -

function payLoan(){
    const amount = document.querySelector('#amount').value;
    const rate = document.querySelector('#rate').value;
    const months = document.querySelector('#months').value;
    const interest = (amount * (rate * 0.01)) / months;
    let payment = ((amount / months) + interest).toFixed(2); 
    payment = payment.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    document.querySelector('#MonthlyPayment').innerHTML = `You Must Pay Monthly: ${payment}`
    }
    