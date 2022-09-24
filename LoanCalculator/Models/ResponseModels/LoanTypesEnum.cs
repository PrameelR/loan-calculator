using System.ComponentModel.DataAnnotations;

namespace LoanCalculator.Models.ResponseModels
{
    public enum LoanTypesEnum
    {
        [Display(Name = "Equal monthly installment")]
        EMI = 1,
        [Display(Name = "Reducing monthly installment")]
        REDUCE = 1
    }
}
