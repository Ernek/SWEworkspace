
it('should calculate the monthly payments correctly', function () {
  const values = {
    amount: 5000,
    years: 5,
    rate: 5,
  };
  expect(calculateMonthlyPayment(values)).toEqual('94.36')
});


