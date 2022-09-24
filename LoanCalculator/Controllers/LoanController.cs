using LoanCalculator.Services;
using Microsoft.AspNetCore.Mvc;

namespace LoanCalculator.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class LoanController : ControllerBase
    {
        private readonly CalculateInstallment calculateinstallment;
        private readonly LoanMasters loanmasters;
        public LoanController(CalculateInstallment calculateinstallment, LoanMasters loanmasters)
        {
            this.calculateinstallment = calculateinstallment;
            this.loanmasters = loanmasters;
        }


        [HttpPost]
        [Route("GetLoanInstallment")]
        public LoanCalculator.Models.ResponseModels.LoanInstallment GetLoanInstallment([FromBody] LoanCalculator.Models.RequestModels.Calculator request)
        {
            var response = calculateinstallment.CalculateMonthlyInstallment(request);
            return response;

        }

        [HttpGet]
        [Route("GetLoanTypes")]
        public List<LoanCalculator.Models.ResponseModels.LoanTypesEnum> GetLoanInstallment()
        {
            var response = loanmasters.GetLoanTypesList();
            return response;

        }
    }
}
