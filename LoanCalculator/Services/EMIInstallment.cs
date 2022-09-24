namespace LoanCalculator.Services
{
    public class EMIInstallment : LoanInstallment
    {
        public EMIInstallment(double interestrate, double loanamount, double noofpayments) : base(interestrate, loanamount, noofpayments)
        {
        }

        public double monthlyinstallment { get; set; }


        private double interest { get; set; }
        private double interestplusone { get; set; }
        private double interestpow { get; set; }
        private double interestpowinterest { get; set; }
        private double interestpowminus { get; set; }
        private double interestpowintdivision { get; set; }


        public override double CalculateMonthlyInstallment()
        {
            interest = interestrate / 100;

            interestplusone = (interest + 1);

            interestpow = Math.Pow(interestplusone, noofpayments);

            interestpowinterest = interest * Math.Pow(interestplusone, noofpayments);

            interestpowminus = interestpow - 1;

            interestpowintdivision = interestpowinterest / interestpowminus;

            monthlyinstallment = loanamount * interestpowintdivision;

            return monthlyinstallment;

        }
    }
}
