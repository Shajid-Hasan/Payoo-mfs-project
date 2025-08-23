// Login button functionality

document.getElementById('login-btn')
    .addEventListener('click', function(event){
        event.preventDefault()
        console.log('login button clicked');
        console.log(event);
    })