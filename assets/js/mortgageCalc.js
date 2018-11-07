// DONT ALLOW NEGATIVE VALUES 
// MAKE SURE THE VALUES HAVE CORRECT TITLE SUCH AS $ 
// %

var homePrice = 0;
var downPayment = 0;
var term = 0;
var interestRate = 0;
var monthlyPayment = 0;
var fixedLoanTerm = 0;


function mortgageCalc(){
  
  // this is selecting the value from the inputs
  homePrice = document.querySelector("#homePrice").value;
  downPayment = document.querySelector("#downPayment").value;
  term = document.querySelector("#term").value;
  interestInput = document.querySelector("#interestRate").value;
  interestRate = interestInput / 100;

  console.log ( interestRate );
  
  console.log( homePrice, downPayment, term, interestRate );
  
  // this will select the right side of the calc
  monthlyPayment = document.querySelector(".payment-amount");
  fixedLoanTerm = document.querySelector(".fixed-loan-term");
  
  console.log( monthlyPayment.innerHTML , fixedLoanTerm.innerHTML )
  
  
   
  var principle = ( homePrice - downPayment);
  var top = ( interestRate / 12 ) * ( 1 + ( interestRate / 12 ))** ( term * 12 )  ;
  var bottom =  ( 1 + ( interestRate / 12 ))**( term * 12) - 1 ;
  
  var sum = principle * (top / bottom);
  
  monthlyPayment.innerHTML = '$ ' +  sum.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  
  
  // ALLOW COMMAS FOR VALUES 
// FIX MARGIN ON INPUT WHEN VALUES ARE ENTERED INTO IT 
//RIGHT NOW THE MAIN PROBLEM IS THAT I CANT FIND THE VALUE OF THE EXPONENTS

// RIGHT SIDE INPUTS
var propertyTaxes = document.querySelector(".tax-amount");
var principleAndInterest = document.querySelector(".principle-interest");
var homeownersInsurance = document.querySelector(".insurance");
  

fixedLoanTerm.innerHTML = term + (' year fixed loan term');
  
// Uncomment these when your math is correct
//   this is going to change the value of the right side of the calc

// PROPERTY TAXES
  // var taxes = "INSERT SHORTCODE HERE";
  // propertyTaxes.innerHTML = '$ ' + taxes.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  
// PRINCIPLE & INTEREST 
  var principleInterest = (homePrice - downPayment) * ( interestRate / 12 );
  // principleAndInterest.innerHTML = '$ ' + principleInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  principleAndInterest.innerHTML = '$ ' + principleInterest.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
  
// HOMEOWNER INSURANCE
  // var homeInsurance = "INSERT SHORTCODE HERE";
  // homeownersInsurance.innerHTML = '$ ' + homeInsurance.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}



