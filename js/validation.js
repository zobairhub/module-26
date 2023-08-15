document.getElementById("addDeposit").addEventListener("click", function() {
  const depositField = document.getElementById("deposit-amount");
  const depositAmount = parseFloat(depositField.value);

  if (!isNaN(depositAmount) && depositAmount > 0) {
    const depositTotalElement = document.getElementById("deposited-amount");
    const currentDepositTotal = parseFloat(depositTotalElement.innerText);

    depositTotalElement.innerText = currentDepositTotal + depositAmount;
    depositField.value = "";

    const currentBalanceField = document.getElementById("current-balance");
    const currentBalance = parseFloat(currentBalanceField.innerText);
    currentBalanceField.innerText = currentBalance + depositAmount;
  } else {
    alert("সংখ্যা দাও");
    depositField.value = "";
  }
});

document.getElementById("withdrawAmount").addEventListener("click", function() {
  const withdrawField = document.getElementById("enter-withdraw-amount");
  const withdrawAmount = parseFloat(withdrawField.value);

  if (!isNaN(withdrawAmount) && withdrawAmount > 0) {
    const withdrawAmountField = document.getElementById("withdraw-amount");
    const currentWithdrawTotal = parseFloat(withdrawAmountField.innerText);

    const currentBalanceField = document.getElementById("current-balance");
    const currentBalance = parseFloat(currentBalanceField.innerText);

    if (currentBalance >= withdrawAmount) {
      withdrawAmountField.innerText = currentWithdrawTotal + withdrawAmount;
      currentBalanceField.innerText = currentBalance - withdrawAmount;
      withdrawField.value = "";
    } else {
      // alert("Insufficient balance for withdrawal.");
      alert(" টাকা নাই তুমি ফকির ");
      withdrawField.value = "";
    }
  } else {
    alert("সংখ্যা দাও");
    withdrawField.value = "";
  }
});
