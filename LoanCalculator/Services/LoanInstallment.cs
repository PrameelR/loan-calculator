namespace LoanCalculator.Services
{
    public abstract class LoanInstallment
    {
        public LoanInstallment(double interestrate, double loanamount, double noofpayments)
        {
            this.interestrate = interestrate;
            this.loanamount = loanamount;
            this.noofpayments = noofpayments;
        }
        protected double interestrate { get; set; }
        protected double loanamount { get; set; }
        protected double noofpayments { get; set; }
        public abstract double CalculateMonthlyInstallment();
    }
}
