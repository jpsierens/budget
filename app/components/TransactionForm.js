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
        let form = {};

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
