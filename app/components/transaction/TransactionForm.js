import React, { Component } from 'react';
import { BudgetType, transCatType } from '../../types';
import handleUpdateItem from '../../helpers/handleUpdateItem';

import DateInput from './DateInput';
import TypeInput from './TypeInput';
import AmountInput from './AmountInput';
import CategoryInput from './CategoryInput';
import DescriptionInput from './DescriptionInput';

const filterInvalids = (form) => {
    return Object.keys(form).filter((key) => {
        form[key] === '';
    });
};

const getFormValues = (form) => {
    const formValues = {};
    Object.keys(form).forEach((key) => {
        formValues[key] = form[key];
    });
    return formValues;
};

const handleSubmit = (form, updateBudget, budget) => {
    const { _id, transactions } = budget;
    const invalids = filterInvalids(form);
    const formValues = getFormValues(form);

    // check for invalids
    if (invalids.length) {
        return alert('Please fill all fields');
    }

    return handleUpdateItem(updateBudget, _id, {
        transactions: [...transactions, formValues]
    });
};

type Props = {
    budget: BudgetType,
    transCats: transCatType[],
    updateBudget: () => void,
    onDone: () => void
};

const btnAddCatStyle = { display: 'block', marginBottom: '10px' };

export default class TransactionForm extends Component {

    constructor(props) {
        super(props);
        this.initState = {
            date: '',
            description: '',
            amount: '',
            type: 'expense',
            category: ''
        };
        this.state = { ...this.initState };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    props: Props;

    handleInputChange(changes) {
        this.setState(changes);
    }

    reset() {
        this.setState(this.initState);
    }

    render() {
        const { updateBudget, budget, onDone, transCats } = this.props;

        return (
            <form className="transaction-form">
                <DateInput onInputChange={this.handleInputChange} />
                <DescriptionInput onInputChange={this.handleInputChange} />
                <AmountInput onInputChange={this.handleInputChange} />
                <TypeInput onInputChange={this.handleInputChange} type="expense" />
                <TypeInput onInputChange={this.handleInputChange} type="income" />
                <CategoryInput
                    type={this.state.type}
                    onInputChange={this.handleInputChange}
                    transCats={transCats} />

                <button
                    onClick={(e)=> {
                        e.preventDefault();
                    }}
                    style={ btnAddCatStyle }>
                    add more categories
                </button>

                <button
                    onClick={(e) => {
                        e.preventDefault();
                        handleSubmit({ ...this.state }, updateBudget, budget);
                        this.reset();
                        onDone();
                    }}>

                    Submit
                </button>
            </form>
        );
    }
}
