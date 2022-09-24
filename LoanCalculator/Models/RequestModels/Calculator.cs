namespace LoanCalculator.Models.RequestModels
{
    public class Calculator
    {
        public int loantype { get; set; }
        public double loanamount { get; set; }
        public double interestrate { get; set; }
        public int noofpayments { get; set; }
    }
}
