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