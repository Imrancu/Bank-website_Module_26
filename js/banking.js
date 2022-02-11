// Handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function() {
    // get the amount deposited
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    // Update deposit total

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    // Update Account Balance
    const totalBalance = document.getElementById('total-balance');
    const totalBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(totalBalanceText);
    const newTotalBalance = previousTotalBalance + newDepositAmount;
    totalBalance.innerText = newTotalBalance;

    // clear the deposit input field
    depositInput.value = '';
});

// Handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function() {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);

    // Set withdraw Total
    const totalWithdraw = document.getElementById('total-withdraw');
    const previousTotalWithdrawText = totalWithdraw.innerText;
    const previousTotalWithdraw = parseFloat(previousTotalWithdrawText);

    const newTotalWithdraw = previousTotalWithdraw + newWithdrawAmount;
    totalWithdraw.innerText = newTotalWithdraw;

    // Update Balance\
    const totalBalance = document.getElementById('total-balance');
    const previousBalanceText = totalBalance.innerText;
    const previousTotalBalance = parseFloat(previousBalanceText);
    const newTotalBalance = previousTotalBalance - newWithdrawAmount;

    totalBalance.innerText = newTotalBalance;

    // Clear withdraw input
    withdrawInput.value = '';
});