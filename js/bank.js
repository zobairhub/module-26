document.getElementById("addDeposit").addEventListener("click",function(){

  const depositField = document.getElementById("deposit-amount");
  const depositAmount = depositField.value;
  const depositedAmount = parseFloat(depositAmount);
  
  const depositTotalElement = document.getElementById("deposited-amount");
  const depositTotal = depositTotalElement.innerText;
  const currentDepositTotal = parseFloat(depositTotal);


  depositTotalElement.innerText = currentDepositTotal + depositedAmount;
  depositField.value = "";

  const GetCurrentBalanceField = document.getElementById("current-balance");
  const currentBalanceField = GetCurrentBalanceField.innerText;
  const currentBalanceFieldString = parseFloat(currentBalanceField);

  GetCurrentBalanceField.innerText = depositedAmount + currentBalanceFieldString;
});


document.getElementById("withdrawAmount").addEventListener("click", function(){

  const withdrawField = document.getElementById("enter-withdraw-amount");
  const withdrawFieldValue = withdrawField.value;
  const withdrawFieldString = parseFloat(withdrawFieldValue);


  const withdrawAmountField = document.getElementById("withdraw-amount");
  const withdrawAmountFieldValue = withdrawAmountField.innerText;
  const withdrawAmountFieldString = parseFloat(withdrawAmountFieldValue);
  

  withdrawAmountField.innerText = withdrawAmountFieldString + withdrawFieldString;

  const GetCurrentBalanceField = document.getElementById("current-balance");
  const currentBalanceField = GetCurrentBalanceField.innerText;
  const currentBalanceFieldString = parseFloat(currentBalanceField);
  

  GetCurrentBalanceField.innerText =  currentBalanceFieldString - withdrawFieldString;
  withdrawField.value = "";
  
  
  




});