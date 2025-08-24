const validPin = 1234;

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Add money button clicked');


    const  bank = document.getElementById('bank').value

    const accountNumber = document.getElementById('account-number').value

    const addAmount = parseInt(document.getElementById('add-amount').value)

    const pin = parseInt(document.getElementById('add-pin').value)

    const availableBalance = parseInt(document.getElementById('available-balance').innerText);
    console.log(availableBalance);

    if(accountNumber.length<11){
        alert('please provide valid account number');
        return;
    }
    
    if(pin !== validPin){
        alert('please write your correct pin');
        return;
    }


    const totalNewAvailableBalance = addAmount + availableBalance;

    document.getElementById('available-balance').
    innerText = totalNewAvailableBalance;
})

// Taggling features

document.getElementById('add-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})