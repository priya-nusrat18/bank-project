//login button event handler
const loginBtn = document.getElementById("login").addEventListener('click', function () {
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = 'none';
    const transactionAera = document.getElementById('transaction-area');
    transactionAera.style.display = 'block';
    
})
//deposit button event handler
const depositBtn = document.getElementById('addDeposit').addEventListener('click', function(){
 const depositNumber = getInputNumber('depositAmount');

  

    updateSpanText('currentDeposit', depositNumber);
    updateSpanText('currentBalance', depositNumber);

    document.getElementById('depositAmount').value = "";
})
//withdraw button event handler
const withdrawBtn = document.getElementById('addWithdraw').addEventListener('click', function(){
 const withdrawNumber = getInputNumber('withdrawAmount');

    updateSpanText('currentWithdraw',  withdrawNumber);
    updateSpanText('currentBalance', -1* withdrawNumber);


    document.getElementById('withdrawAmount').value = "";

});
function getInputNumber(id) {
    const withdrawAmount =document.getElementById(id).value;
    const withdrawNumber = parseFloat(withdrawAmount);
    return withdrawNumber;
}



function updateSpanText(id , depositNumber) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = currentBalanceNumber + depositNumber;

    document.getElementById(id).innerText = totalBalance;
}