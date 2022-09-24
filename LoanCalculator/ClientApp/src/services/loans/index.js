
import axiosinstanceget from '../axiosinstance/instanceget';
import axiosinstancepost from '../axiosinstance/instancepost';


export async function GetLoanTypes() {

    var _apipath = process.env.REACT_APP_GET_LOAN_TYPES;

    return axiosinstanceget.post(_apipath);


}

export async function CalculateLoanInstallment(_data) {

    var data = {
        "loantype": _data.loantype,
        "loanamount": _data.loanamount,
        "interestrate": _data.interestrate,
        "noofpayments": _data.noofpayments
    };


    var _apipath = process.env.REACT_APP_CALCULATE_LOAN_INSTALLMENT;


    return axiosinstancepost.post(_apipath, data);


}
