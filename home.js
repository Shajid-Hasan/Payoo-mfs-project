const validPin = 1234;

// function to get input values

function getInputValueNumber (id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)

    return inputFieldValueNumber
}

function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value

    return inputFieldValue
}

// Function to get innerText
function getAvailableBalance(id){
    const mainBalance = document.getElementById(id)
    const mainBalanceValue = mainBalance.innerText
    const mainBalanceValueNumber = parseInt(mainBalanceValue)

    return mainBalanceValueNumber
}

// Function to set innerText

function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}

// Add money features

document.getElementById('add-money').addEventListener('click', function(event){
    event.preventDefault();

    const  bank = getInputValue('bank')

    const accountNumber = getInputValue('account-number')

    const addAmount = getInputValueNumber('add-amount')

    const pin = getInputValueNumber('add-pin')

    console.log(addAmount);

    const availableBalance = getAvailableBalance('available-balance')

    if(accountNumber.length<11){
        alert('please provide valid account number');
        return;
    }
    
    if(pin !== validPin){
        alert('please write your correct pin');
        return;
    }

    const totalNewAvailableBalance =  addAmount + availableBalance;


    setInnerText(totalNewAvailableBalance)
})

// Cash out money features
const accountPin = 1234;
document.getElementById('withdraw-money').addEventListener('click', function(event){
    event.preventDefault();

    const agentNumber = getInputValue('agent-number')

    const amaount = getInputValueNumber('withdraw-amaount')

    const availableBalance = getAvailableBalance('available-balance')

    const accountPin = getInputValueNumber('account-pin')

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

    const totalMainBalance = availableBalance - amaount;

    setInnerText(totalMainBalance)

})

// Transfer Money
document.getElementById('send-money').addEventListener('click', function(event){
    event.preventDefault();

    const userAccountNumber = getInputValue('user-accout-number')

    const sendAmaount = getInputValueNumber('send-amount')

    const availableBalance = getAvailableBalance('available-balance')

    const accountPin = getInputValueNumber('transfer-pin')

    if(userAccountNumber.length<11){
        alert('write valid agent number');
        return;
    }

    if(accountPin !== validPin){
        alert("invalid pin");
        return;
    }

    if(sendAmaount > availableBalance){
        alert("not enough balance");
    }

    const totalMainBalance = availableBalance - sendAmaount;

    setInnerText(totalMainBalance)

})

// Get Bonus

document.getElementById('get-btn-bonus').addEventListener('click', function(event){
    event.preventDefault()
    const bonus = getInputValueNumber('bonus-coupon')
})

// Pay bill

document.getElementById('pay-money').addEventListener('click', function(event){
    event.preventDefault()
    const selectToPay = getInputValue('back')
    const billerAccountNumber = getInputValue('biller-account-number')

    const amountToPay = getInputValueNumber('pay-amount')

    const pinNumber = getInputValueNumber('digit-pin')

    const availableBalance = getAvailableBalance('available-balance')

    const totalMainBalance = availableBalance - amountToPay;

    setInnerText(totalMainBalance)
})


// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}

// Taggling feature

// Add money toggling
document.getElementById('add-btn').addEventListener('click', function(){
    handleToggle('add-money-parent')

    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById('add-btn').classList.remove('border-[border-gray-300')
    document.getElementById('add-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

// Cashout money toggling
document.getElementById('cash-out-btn').addEventListener('click', function(){
    handleToggle('cash-out-parent')

    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById('cash-out-btn').classList.remove('border-[border-gray-300')
    document.getElementById('cash-out-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

// Transfer money toggling
document.getElementById('transfer-money-btn').addEventListener('click', function(){
    handleToggle('transfer-money-parent')

    const formBtns = document.getElementsByClassName('form-btn')
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById('transfer-money-btn').classList.remove('border-[border-gray-300')
    document.getElementById('transfer-money-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

// Get bonus toggling
document.getElementById('get-bonus-btn').addEventListener('click', function(){
    handleToggle('get-bonus-parent')

    const formBtns = document.getElementsByClassName('form-btn')
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }

    document.getElementById('get-bonus-btn').classList.remove('border-[border-gray-300')
    document.getElementById('get-bonus-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})

// pay bill toggling

document.getElementById('pay-bill-btn').addEventListener('click', function(){
    handleToggle('pay-bill-parent')

    const formBtns = document.getElementsByClassName('form-btn')
    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    
    document.getElementById('pay-bill-btn').classList.remove('border-[border-gray-300')
    document.getElementById('pay-bill-btn').classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
})



    