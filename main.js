// Sliders //
function slider1Change(val) {
  document.getElementById('output1').innerHTML = val;
}
document.getElementById('slider1').value = 50;

function slider2Change(val) {
  document.getElementById('output2').innerHTML = val;
}
document.getElementById('slider2').value = 50;
// End Sliders //

// Calculator //
function projCostCalc() {
  // Project Cost Declarations //
  var purchPrice = parseInt(document.querySelector("#output1").value);
  var renCost = parseInt(document.querySelector("#output2").value);
  var projCost = purchPrice + renCost;
  var loanTerm = parseInt(document.querySelector("#loan-length").value);
  // End Project Cost Declarations //

  var downPaymentComp = parseInt(document.querySelector("#downPaymentComp").value);
  var loanPrincipleComp = projCost * (1 - (downPaymentComp/100));
  var downPaymentCompTotal = projCost * (downPaymentComp/100);
  var interestComp = parseInt(document.querySelector("#interestRateComp").value);
  var interestCompTotal = ((loanPrincipleComp * (interestComp/100))/12) * loanTerm;
  var pointsComp = parseInt(document.querySelector("#pointsComp").value);
  var pointsCompTotal = (loanPrincipleComp * (pointsComp/100));



  var downPaymentSLS = parseInt(document.querySelector("#downPaymentSLS").value);
  var downPaymentSLSTotal = projCost * (downPaymentSLS/100);
  var feesSLS = 0;
  var pointsSLS = parseInt(document.querySelector("#pointsSLS").value);
  var interestSLS = parseInt(document.querySelector("#interestRateSLS").value);
  var interestSLSTotal = ((projCost * (interestSLS/100))/12) * loanTerm;
  var pointsSLSTotal = (projCost * (pointsSLS/100));



  document.querySelector("#projCost").innerHTML = projCost;
  document.querySelector("#totalProjCostSLS").innerHTML = projCost;
  document.querySelector("#totalProjCostCompet").innerHTML = projCost;
  document.querySelector("#loanPrinciple").innerHTML = projCost;
  document.querySelector("#projCostExpenseSLS").innerHTML = -projCost
  document.querySelector("#projCostExpenseComp").innerHTML = -projCost

  document.querySelector("#loanPrincipleComp").innerHTML = loanPrincipleComp;
  document.querySelector("#downPaymentCompTotal").innerHTML = downPaymentCompTotal;
  document.querySelector("#downPaymentSLSTotal").innerHTML = downPaymentSLSTotal;
  document.querySelector("#interestSLSTotal").innerHTML = interestSLSTotal;
  document.querySelector("#pointsSLSTotal").innerHTML = pointsSLSTotal;

  document.querySelector("#interestOOPComp").innerHTML = interestCompTotal;
  document.querySelector("#pointsOOPComp").innerHTML = pointsCompTotal;



  document.querySelector("#feesOOPSLS").innerHTML = feesSLS;
  document.querySelector("#pointsOOPSLS").innerHTML = 0;
  document.querySelector("#interestOOPSLS").innerHTML = 0;
  document.querySelector("#outOfPocketCostsSLS").innerHTML = 0;

  document.querySelector("#outOfPocketCostsComp").innerHTML = (downPaymentCompTotal + interestCompTotal + pointsCompTotal);


}
// End Calculator //
