import React, { Component } from 'react';
import { BudgetType, transCatType } from '../types';
import handleUpdateItem from '../helpers/handleUpdateItem';

const handleSubmit = (e, data, updateBudget, budget) => {
    e.preventDefault();

    // check for empty fields
    const dataKeys = Object.keys(data);
    const invalids = dataKeys.filter((key) => data[key].value === '');
    if (invalids.length) return alert('Please fill all fields');

    const { _id, transactions } = budget;
    const formValues = {};

    // create an object with the actual values
    dataKeys.forEach((key) => { formValues[key] = data[key].value; });

    handleUpdateItem(updateBudget, _id, {
        transactions: [...transactions, formValues]
    });

    // reset form
    data.date.value = '';
    data.description.value = '';
    data.amount.value = '';

    return true;
};

type Props = {
    budget: BudgetType,
    transCats: transCatType[],
    updateBudget: () => void,
    onDone: () => void
};

const btnAddCatStyle = { display: 'block', marginBottom: '10px' };

export default class TransactionForm extends Component {
    state = {
        transCat: 'expense',
    };

    props: Props;

    render() {
        const { updateBudget, budget, onDone, transCats } = this.props;
        const { transCat } = this.state;
        const form = {};

        return (
            <form className="transaction-form">
                <label>Date</label>
                <input
                    type="date"
                    ref={(e) => { form.date = e; }} />
                <label>Description</label>
                <textarea
                    rows="10"
                    cols="50"
                    ref={(e) => { form.description = e; }} />
                <label>Amount</label>
                <input
                    type="text"
                    ref={(e) => { form.amount = e; }} />
                <label style={{ display: 'inline' }}>Expense?</label>
                <input
                    type="radio"
                    name="type"
                    value="expense"
                    defaultChecked
                    style={{ display: 'inline' }}
                    ref={(e) => { form.expense = e; }}
                    onClick={() => this.setState({ transCat: 'expense'})} />
                <label style={{ display: 'inline' }}>Income?</label>
                <input
                    type="radio"
                    name="type"
                    value="income"
                    style={{ display: 'inline' }}
                    ref={(e) => { form.income = e; }}
                    onClick={() => this.setState({ transCat: 'income'})} />
                <label>Category</label>
                <select
                    ref={(e) => { form.category = e; }}>

                    {transCats.map((t) => {
                        if (t.type !== transCat) return null;

                        return <option key={t._id} value={t.name}>{t.name}</option>;
                    })}
                </select>

                <button
                    onClick={(e)=> {
                        e.preventDefault();
                    }} 
                    style={ btnAddCatStyle }>
                    add more categories
                </button>  

                <button
                    onClick={(e) => {
                        handleSubmit(e, form, updateBudget, budget);
                        onDone();
                    }}>

                    Submit
                </button>
            </form>
        );
    }
}
