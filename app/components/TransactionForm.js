import React, { Component } from 'react';
import { BudgetType, transCatType } from '../types';
import handleUpdateItem from '../helpers/handleUpdateItem';

const filterInvalids = (form) => {
    return Object.keys(form).filter((key) => {
        form[key].value === '';
    });
};

const getFormValues = (form) => {
    const formValues = {};
    Object.keys(form).forEach((key) => {
        formValues[key] = form[key].value;
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

const resetForm = (form) => {
    const newForm = Object.assign({}, form);
    newForm.date.value = '';
    newForm.description.value = '';
    newForm.amount.value = '';
    return newForm;
};

const DateInput = () =>
    <div>
        <label>Date</label>
        <input
            type="date"
            ref={(e) => { date = e; }} />;
    </div>;

const DescriptionInput = () =>
    <div>
        <label>Description</label>
        <textarea
            rows="10"
            cols="50"
            ref={(e) => { description = e; }} />
    </div>;

const AmountInput = () =>
    <div>
        <label>Amount</label>
        <input
            type="text"
            ref={(e) => { amount = e; }} />
    </div>;

const ExpenseInput = () =>
    <div>
        <label style={{ display: 'inline' }}>Expense?</label>
        <input
            type="radio"
            name="type"
            value="expense"
            defaultChecked
            style={{ display: 'inline' }}
            onClick={() => this.setState({ type: 'expense'})} />
    </div>;

const IncomeInput = () =>
    <div>
        <label style={{ display: 'inline' }}>Income?</label>
        <input
            type="radio"
            name="type"
            value="income"
            style={{ display: 'inline' }}
            onClick={() => this.setState({ type: 'income'})} />
    </div>;
    
const CategoryInput = () =>
    <div>
        <label>Category</label>
        <select
            ref={(e) => { category = e; }}>

            {transCats.map((t) => {
                if (t.type !== type) return null;

                return <option key={t._id} value={t.name}>{t.name}</option>;
            })}
        </select>
    </div>;

type Props = {
    budget: BudgetType,
    transCats: transCatType[],
    updateBudget: () => void,
    onDone: () => void
};

const btnAddCatStyle = { display: 'block', marginBottom: '10px' };

export default class TransactionForm extends Component {
    state = {
        date: '',
        description: '',
        amount: '',
        type: 'expense'
    };

    props: Props;

    render() {
        const { updateBudget, budget, onDone, transCats } = this.props;
        const { date, description, amount, type } = this.state;

        return (
            <form className="transaction-form">
                { DateInput }
                { DescriptionInput }
                { AmountInput }
                { ExpenseInput }
                { IncomeInput }
                { CategoryInput }

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
                        handleSubmit(form, updateBudget, budget);
                        form = resetForm(form);
                        onDone();
                    }}>

                    Submit
                </button>
            </form>
        );
    }
}
