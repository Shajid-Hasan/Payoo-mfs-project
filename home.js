const validPin = 1234;

// function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}


// Add money features

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();
    // console.log('Add money button clicked');


    const  bank = document.getElementById('bank').value

    const accountNumber = document.getElementById('account-number').value

    const addAmount = getInputValueNumber('add-amount')

    const pin = getInputValueNumber('add-pin')

    console.log(addAmount);

    const availableBalance = parseInt(document.getElementById('available-balance').innerText)
    // console.log(availableBalance);

    if(accountNumber.length<11){
        alert('please provide valid account number');
        return;
    }
    
    if(pin !== validPin){
        alert('please write your correct pin');
        return;
    }

    // if(availableBalance = 0){
    //     alert('add money your account');
    // }


    const totalNewAvailableBalance =  addAmount + availableBalance;


    document.getElementById('available-balance').
    innerText = totalNewAvailableBalance;
})

// Cash out money features
// const pin = 1234;
document.getElementById('withdraw-money').addEventListener('click', function(event){
    event.preventDefault();

    const agentNumber = document.getElementById('agent-number').value 

    const amaount = getInputValueNumber('withdraw-amaount')

    const availableBalance = document.getElementById('available-balance').innerText

    const accountPin = getInputValueNumber('account-pin')

    // console.log(amaount,availableBalance);

    if(agentNumber.length<11){
        alert('write valid agent number');
        return;
    }

    if(accountPin !== validPin){
        alert("invalid pin");
        return;
    }

    if(amaount > availableBalance){
        alert("not enough balance");
    }

    // if(availableBalance == 0){
    //     alert('not enough balance for withdrow');
    // }

    const totalMainBalance = availableBalance - amaount;

    document.getElementById('available-balance').
    innerText = totalMainBalance;

})


// Taggling feature

document.getElementById('add-btn').addEventListener('click', function(){
    document.getElementById('cash-out-parent').style.display = 'none';
    document.getElementById('add-money-parent').style.display = 'block';
})
document.getElementById('cash-out-btn').addEventListener('click', function(){
    document.getElementById('add-money-parent').style.display = 'none';
    document.getElementById('cash-out-parent').style.display = 'block';
})




    