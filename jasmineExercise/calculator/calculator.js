window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
      // console.log('RAN')
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  // Set default values (whichever values)
  const initValues = { amount: 5000, years: 5, rate: 5};
  // Populate DOM elements with their default values 
  const amountInput = document.getElementById("loan-amount");
  const yearsInput = document.getElementById("loan-years");
  const rateInput = document.getElementById("loan-rate");

  amountInput.value = initValues.amount;
  yearsInput.value = initValues.years;
  rateInput.value = initValues.rate;
  update();
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  const currentValues = getCurrentUIValues();
  // console.log('check update')
  updateMonthly(calculateMonthlyPayment(currentValues));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const monthlyRate = (values.rate / 100) / 12;
  const numOfPayments = Math.floor(values.years * 12);
  // console.log(monthlyRate, numOfPayments, values.amount *monthlyRate)
  // console.log('calculating')
  return (monthlyPayments = (values.amount * monthlyRate) / (1 - Math.pow((1 + monthlyRate), -numOfPayments))).toFixed(2);
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  const monthlyPay = document.getElementById("monthly-payment");
  // console.log(monthly);
  monthlyPay.innerHTML = "$" + monthly; 

}
