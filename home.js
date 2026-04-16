const validPin = "1234";
// add money feature
document.getElementById('add-money-btn')
    .addEventListener('click', function (event) {
        event.preventDefault();

        const bankName = document.getElementById('bank').value;
        const accountNumber = document.getElementById('account-number').value;
        const addAmount = parseInt(document.getElementById('add-amount').value);
        const addPin = document.getElementById('add-pin').value;
        const availableBalance = parseInt(document.getElementById('available-balance').innerText);

        if (accountNumber.length < 11) {
            alert('please provide a valid account number');
            return;
        }
        if (addPin !== validPin) {
            alert("please provide valid pin number");
            return;
        }

        const totalNewAvailableBalance = addAmount + availableBalance;

        document.getElementById('available-balance').
            innerText = totalNewAvailableBalance;

    })

//cash out feature
document.getElementById('withdraw-button')
    .addEventListener('click', function (event) {
        event.preventDefault()
        const withdrawAmount = parseInt(document.getElementById('withdraw-amount').value);
        const availableBalance = parseInt(document.getElementById('available-balance').innerText)
        const totalNewAvailableBalance = availableBalance - withdrawAmount;

        document.getElementById('available-balance')
            .innerText = totalNewAvailableBalance
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