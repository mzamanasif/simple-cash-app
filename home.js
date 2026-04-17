const validPin = 1234;

// function to get input value convert with number
function getInputValueNumber(id) {
    const inputField = parseInt(document.getElementById(id).value);
    return inputField;
}

// function to get input value
function getInputValue(id) {
    const inputField = document.getElementById(id).value;
    return inputField;
}

// function to get inner text
function getInnerText(id) {
    const element = parseInt(document.getElementById(id).innerText);
    return element;
}

// function to set inner text
function setInnerText(value) {
    const availableBalanceElement = document.getElementById('available-balance');
    availableBalanceElement.innerText = value;
}

// function to toggle
function handleToggle(id) {
    const forms = document.getElementsByClassName("form")

    // remove all form 
    for (const form of forms) {
        form.style.display = 'none'
    }
    // set the target form
    document.getElementById(id).style.display = 'block'
}

//function to toggle target set border and color
function handleToggleTarget(id) {
    const formButtons = document.getElementsByClassName('form-btn')
    for (const btn of formButtons) {
        btn.classList.remove("border-[#0874F2],", "bg-[#0874f20d]")
        btn.classList.add("border-gray-300")
    }
    document.getElementById(id).classList.remove("border-gray-300")
    document.getElementById(id).classList.add("border-[#0874F2],", "bg-[#0874f20d]")
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
        handleToggle('add-money-parent');
        handleToggleTarget('add-button')
    })

// cash out button
document.getElementById('cash-out-button')
    .addEventListener('click', function () {
        handleToggle('cash-out-parent');
        handleToggleTarget('cash-out-button')
    })

// transfer money button
document.getElementById('transfer-button')
    .addEventListener('click', function () {
        handleToggle('transfer-money-parent')
        handleToggleTarget('transfer-button')
    })


// get bonus button
document.getElementById('get-bonus-button')
    .addEventListener('click', function () {
        handleToggle('get-bonus-parent')
        handleToggleTarget('get-bonus-button')
    })

// pay bill button
document.getElementById('pay-bill-button')
    .addEventListener('click', function () {
        handleToggle('pay-bill-parent')
        handleToggleTarget('pay-bill-button')
    })

// Transaction button
document.getElementById('transaction-button')
    .addEventListener('click', function () {
        handleToggle('transaction-parent')
        handleToggleTarget('transaction-button')
    })
