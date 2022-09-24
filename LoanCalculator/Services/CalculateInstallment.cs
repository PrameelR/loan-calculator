using LoanCalculator.Models.RequestModels;

namespace LoanCalculator.Services
{
    public class CalculateInstallment
    {
        private double installment = 0;
        public LoanCalculator.Models.ResponseModels.LoanInstallment CalculateMonthlyInstallment(Calculator cal)
        {
            if (cal.loantype == 1)
            {
                LoanInstallment loanInstallment = new EMIInstallment(cal.interestrate, cal.loanamount, cal.noofpayments);
                installment = loanInstallment.CalculateMonthlyInstallment();
            }
            LoanCalculator.Models.ResponseModels.LoanInstallment loaninstallment = new Models.ResponseModels.LoanInstallment();
            loaninstallment.installment = installment;
            return loaninstallment;
        }
    }
}
