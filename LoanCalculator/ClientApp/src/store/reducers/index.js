
import { combineReducers } from 'redux';
import { loanReducer } from './loanReducer';

const rootReducer = combineReducers({
    loan: loanReducer,
});

export default rootReducer;
