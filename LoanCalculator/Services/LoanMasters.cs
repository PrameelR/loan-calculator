using LoanCalculator.Models.ResponseModels;

namespace LoanCalculator.Services
{
    public class LoanMasters
    {

        public List<LoanTypesEnum> GetLoanTypesList()
        {
            List<LoanTypesEnum> loantype = Enum.GetValues(typeof(LoanTypesEnum))
                               .Cast<LoanTypesEnum>()
                               .ToList();
            return loantype;
        }
    }
}
