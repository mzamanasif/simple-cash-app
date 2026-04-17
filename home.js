const validPin = 1234;

// function to get input value convert with number
function getInputValueNumber(id){
    const inputField = parseInt(document.getElementById(id).value);
    return inputField;
}

// function to get input value
function getInputValue(id){
    const inputField = document.getElementById(id).value;
    return inputField;
}

// function to get inner text
function getInnerText(id){
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

// function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;
}


// add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const bankName = getInputValue('bank');
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = getInputValueNumber('add-amount')
        const addPin = getInputValueNumber('add-pin');
        const availableBalance = getInnerText('available-balance');

        if (accountNumber.length < 11) {
            alert('please provide a valid account number');
            return;
        }
        if (addPin !== validPin) {
            alert("please provide valid pin number");
            return;
        }

        const totalNewAvailableBalance = addAmount + availableBalance;

        setInnerText(totalNewAvailableBalance);

    })

//cash out feature
document.getElementById('withdraw-button')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const withdrawAmount = getInputValueNumber('withdraw-amount');
        const availableBalance = getInnerText('available-balance');
        const totalNewAvailableBalance = availableBalance - withdrawAmount;

        setInnerText(totalNewAvailableBalance);
    })



// toggling feature
// add money button 
document.getElementById('add-button')
    .addEventListener('click', function () {
        document.getElementById('cash-out-parent').style.display = "none";
        document.getElementById('add-money-parent').style.display = "block";
    })

// cash out button
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        document.getElementById('add-money-parent').style.display = "none";
        document.getElementById('cash-out-parent').style.display = "block";
    })