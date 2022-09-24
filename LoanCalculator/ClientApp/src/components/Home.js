import React, { Component } from 'react';
import { connect } from "react-redux";
import * as actions from '../store/actions';
import { Select } from 'antd';


const { Option } = Select;

class Home extends Component {
    static displayName = Home.name;



    constructor(props) {
        super(props);
        this.state = {
            forminvalid: false,
            loanform: [
                {
                    key: "loantype",
                    label: "Calculator Type",
                    placeholder: "Select Calculator Type",
                    invalidmsg: "Please select calculator type",
                    value: null,
                    type: "select",
                    options: [
                        { key: 1, value: 1, Name: "Equal Monthly Installment (EMI)" },
                        { key: 2, value: 2, Name: "Reduce Monthly Installment" },
                    ],
                    isvalid: false
                },
                {
                    key: "loanamount",
                    label: "Loan Amount (Principal)",
                    placeholder: "Enter Loan Amount (Principal)",
                    invalidmsg: "Please enter loan amount (principal)",
                    value: null,
                    type: "number",
                    isvalid: false
                },
                {
                    key: "interestrate",
                    label: "Interest Rate",
                    placeholder: "Enter Interest Rate",
                    invalidmsg: "Please enter interest rate",
                    value: null,
                    type: "number",
                    isvalid: false
                },
                {
                    key: "numberofpayments",
                    label: "No of Payments",
                    placeholder: "Enter No of Payments",
                    invalidmsg: "Please enter no of payments",
                    value: null,
                    type: "number",
                    isvalid: false
                }
            ]
        };
    };

    onChangeInput = (key, event) => {


        var loanform = [...this.state.loanform];
        if (loanform[key].type == "number") {
            if (event.target.value !== null) {

                    loanform[key].value = event.target.value;
            }
            loanform[key].isvalid = event.target.value !== undefined ? event.target.value !== null ? event.target.value.toString().trim() !== "" ? true : false : false : false;
        } else if (loanform[key].type == "select") {
            loanform[key].value = event;
            loanform[key].isvalid = event !== undefined ? event !== null ? true : false : false;
        }
        this.setState({ loanform });
    }

    CalculateInstallment = () => {

        var loanform = [...this.state.loanform];
        var invalidform = false;
        for (var index in loanform) {
            if (!loanform[index].isvalid) {
                invalidform = true;
                break;
            }
        }


        if (invalidform === false) {
            var _data = {
                "loantype": loanform[0].value,
                "loanamount": loanform[1].value,
                "interestrate": loanform[2].value,
                "noofpayments": loanform[3].value
            };

            Promise.resolve(this.props.CalculateLoanInstallmentAction(_data));
        }
        this.setState({ forminvalid: invalidform });
    }

    ResetForm = () => {

        var loanform = [...this.state.loanform ];
        for (var index in loanform) {
            loanform[index].value = null;
        }

        console.log(loanform);
        this.setState({ loanform, forminvalid: false });

    }

    render() {
        return (
            <div className="container vh-100 d-flex align-items-center justify-content-center">
                <div className="row bg-light shadow rounded p-3">
                    <div className="col-12  mb-2">
                        <h3>Loan Calculator</h3>
                    </div>

                    {
                        this.state.loanform.map((item,idx) => {


                            if (item.type === "number") {
                                return (<div className="form-group col-12 mb-2 p-2" key={idx}>
                                    <label>{item.label}</label>
                                    <input className="form-control" value={item.value} type="number" placeholder={item.placeholder} onChange={(event) => this.onChangeInput(idx, event)} />
                                    {!item.isvalid && this.state.forminvalid &&
                                        <small className="form-text text-muted label-danger">{item.invalidmsg}</small>}
                                </div>
                                );
                            } else if (item.type == "select") {
                                return (
                                    <div className="form-group col-12 mb-2 p-2" key={idx}>
                                        <label>{item.label}</label>
                                        <Select className="form-control"
                                            value={item.value}
                                            placeholder={item.placeholder}
                                            onChange={(event) => this.onChangeInput(idx, event)}
                                        >
                                            {
                                                item.options.map(opt => {
                                                    return (
                                                        <Option key={opt.key} value={opt.value}>{opt.Name}</Option>
                                                    );
                                                })
                                            }
                                        </Select>
                                        {!item.isvalid && this.state.forminvalid &&
                                            <small className="form-text text-muted label-danger">{item.invalidmsg}</small>}
                                    </div>);
                            }
                        })
                    }

                    <div className="col-12 d-flex flex-row justify-content-end mb-2">
                        <button className="btn btn-primary me-2" onClick={() => this.CalculateInstallment()}>Calculate</button>
                        <button className="btn btn-secondary ms-2" onClick={() => this.ResetForm()}>Reset</button>
                    </div>
                    <div className="form-group col-12 mb-2 p-2">
                    <hr />
                    </div>
                    <div className="col-12 d-flex flex-row justify-content-start mb-2">
                        <h5>{"Monthly installment :" + (this.props.monthlyinstallment ? this.props.monthlyinstallment.installment ? this.props.monthlyinstallment.installment : "N/A": "N/A") }</h5>
                    </div>
                </div>

            </div>
        );
    }
}



const
    mapStateToProps = state => {
        return {
            loantypes: state.loan.loantypes,
            monthlyinstallment: state.loan.monthlyinstallment,
        };
    };

const
    mapDispatchToProps = dispatch => {
        return {
            GetLoanTypesAction: () => dispatch(actions.GetLoanTypesAction()),
            CalculateLoanInstallmentAction: (_data) => dispatch(actions.CalculateLoanInstallmentAction(_data)),

        };
    };

export default connect(mapStateToProps, mapDispatchToProps)(Home);