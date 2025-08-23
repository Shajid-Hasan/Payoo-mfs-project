// Login button functionality

document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        
        const mobileNumber = 12345678910;
        const piNumber = 1234;

        const mobileNumberValue = document.getElementById('mobile-number').value 
        const mobileNumberValueConverted = parseInt(mobileNumberValue)

        const pinNumberValue = document.getElementById('pin-number').value 
        const pinNumberValueConverted = parseInt(pinNumberValue)

        console.log(mobileNumberValueConverted, pinNumberValueConverted);
    
    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === piNumber){
        window.location.href="./home.html"
    }
    else{
        alert("Invalid credentials")
    }
    
    
    
    })

