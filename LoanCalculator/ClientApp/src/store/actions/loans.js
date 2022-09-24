
import * as types from '../types';
import * as services from '../../services'

export function GetLoanTypesAction() {

    return async (dispatch) => {
        await services.GetLoanTypes().then((response) => {

            var data = response.data;

            if (response.statusText === "OK") {


                dispatch(GetLoanTypes(data));
            }
            else {
                dispatch(GetLoanTypes(data));
            }
        })
    };
}

export function GetLoanTypes(payload) {
    return {
        type: types.GET_LOAN_TYPES,
        payload
    };
};


export function CalculateLoanInstallmentAction(_data) {

    return async (dispatch) => {
        await services.CalculateLoanInstallment(_data).then((response) => {

            var data = response.data;

            if (response.statusText === "OK") {


                dispatch(CalculateLoanInstallment(data));
            }
            else {
                dispatch(CalculateLoanInstallment(data));
            }
        })
    };
}

export function CalculateLoanInstallment(payload) {
    return {
        type: types.CALCULATE_MONTHLY_INSTALLMENT,
        payload
    };
};