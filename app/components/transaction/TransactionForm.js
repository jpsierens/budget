import React, { Component } from 'react';
import { BudgetType, transCatType, TransactionType } from '../../types';
import handleUpdateItem from '../../helpers/handleUpdateItem';

import DateInput from './DateInput';
import TypeInput from './TypeInput';
import AmountInput from './AmountInput';
import CategoryInput from './CategoryInput';
import DescriptionInput from './DescriptionInput';
import { DEFAULT_CATEGORY } from '../../rules';

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

    if (formValues.category === '') {
        formValues.category = DEFAULT_CATEGORY;
    }

    return handleUpdateItem(updateBudget, _id, {
        transactions: [...transactions, formValues]
    });
};

type Props = {
    budget: BudgetType,
    transCats: transCatType[],
    transactionToUpdate: TransactionType,
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
        const { updateBudget, budget, onDone, transCats, transactionToUpdate } = this.props;
        const update = transactionToUpdate;

        return (
            <form className="transaction-form">
                <DateInput
                    update={update ? update.date : null}
                    onInputChange={this.handleInputChange} />
                <DescriptionInput
                    update={update ? update.description : null}
                    onInputChange={this.handleInputChange} />
                <AmountInput
                    update={update ? update.amount : null}
                    onInputChange={this.handleInputChange} />
                <TypeInput
                    update={update ? update.type : null}
                    onInputChange={this.handleInputChange} type="expense" />
                <TypeInput
                    update={update ? update.type : null}
                    onInputChange={this.handleInputChange} type="income" />
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
