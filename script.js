//login button function
document.getElementById('login-btn')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const mobileNumber = 1234567890;
        const pinNumber = 1234;

        // get number from input filed
        const mobileNumberValue = document.getElementById('mobile-number').value;
        const numberConvert = parseInt(mobileNumberValue);
        
        // get pin from input filed
        const pinNumberValue = document.getElementById('pin-number').value;
        const pinConvert = parseInt(pinNumberValue);
        
        if(numberConvert === mobileNumber && pinConvert === pinNumber){
            window.location.href = './home.html'
        }
        else{
            alert("Invalid Credentials")
        }
    })