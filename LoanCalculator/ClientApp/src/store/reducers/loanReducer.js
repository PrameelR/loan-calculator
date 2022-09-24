import * as actionTypes from '../types';


const initialState = {
    loantypes: [],
    monthlyinstallment: {
        installment: "N/A"
    }
};

export function loanReducer(state = initialState, action) {
    switch (action.type) {
        case actionTypes.GET_LOAN_TYPES:
            return {
                ...state,
                loantypes: action.payload,
            };
        case actionTypes.CALCULATE_MONTHLY_INSTALLMENT:
            return {
                ...state,
                monthlyinstallment: action.payload,
            };
        default:
            return state
    }
};