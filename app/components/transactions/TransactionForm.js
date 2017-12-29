import React, { Component } from 'react';
import { BudgetType, TransactionType } from '../../types';
import handleUpdateItem from '../../helpers/handleUpdateItem';

import DateInput from './DateInput';
import TypeInput from './TypeInput';
import AmountInput from './AmountInput';
import Categories from '../../containers/CategoryContainer';
import DescriptionInput from './DescriptionInput';
import { DEFAULT_CATEGORY } from '../../rules';

const filterInvalids = (form) => {
    return Object.keys(form).filter((key) => {
        form[key] === '';
    });
};

const handleSubmit = (form, updateBudget, budget) => {
    const { _id, transactions } = budget;
    const invalids = filterInvalids(form);

    // check for invalids
    if (invalids.length) {
        return alert('Please fill all fields');
    }

    if (form.category === '') {
        form.category = DEFAULT_CATEGORY;
    }

    // filter out same ID transactions (happens when updating a transaction)
    const filteredTransactions = (form.isUpdate) ?
        transactions.filter(t => t._id !== form._id)
        :
        transactions;

    return handleUpdateItem(updateBudget, _id, {
        transactions: [...filteredTransactions, form]
    });
};

type Props = {
    budget: BudgetType,
    transactionToUpdate: TransactionType,
    indexParam: String,
    updateBudget: () => void,
    onDone: () => void
};

export default class TransactionForm extends Component {

    constructor(props) {
        super(props);
        this.initState = {
            date: '',
            description: '',
            amount: '',
            type: 'expense',
            category: '',
            isUpdate: false
        };
        this.state = { ...this.initState };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    componentWillMount() {
        if (this.props.transactionToUpdate) {
            this.setState({ ...this.props.transactionToUpdate, isUpdate: true });
        }
    }

    props: Props;

    handleInputChange(changes) {
        this.setState(changes);
    }

    reset() {
        this.setState(this.initState);
    }

    render() {
        const { date, description, amount, type } = this.state;
        const { updateBudget, budget, onDone, indexParam } = this.props;

        return (
            <form className="transaction-form">
                <DateInput
                    value={date}
                    onInputChange={this.handleInputChange} />
                <DescriptionInput
                    value={description}
                    onInputChange={this.handleInputChange} />
                <AmountInput
                    value={amount}
                    onInputChange={this.handleInputChange} />
                <TypeInput
                    value={type}
                    onInputChange={this.handleInputChange} type="expense" />
                <TypeInput
                    value={type}
                    onInputChange={this.handleInputChange} type="income" />

                <Categories indexParam={indexParam} />

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
