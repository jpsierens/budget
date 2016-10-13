import React from 'react';
import { BudgetType } from '../types';
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
    updateBudget: () => void
};

const TransactionForm = ({ updateBudget, budget, onDone } = Props) => {
    let form = {
        date: '',
        description: '',
        amount: '',
        income: '',
        category: ''
    };

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
            <label style={{ display: 'inline' }}>Income?</label>
            <input
                type="checkbox"
                style={{ display: 'inline' }}
                ref={(e) => { form.income = e; }} />
            <label>Category</label>
            <select
                ref={(e) => { form.category = e; }}>

                <option value="other">Other</option>
            </select>
            <button
                onClick={(e) => {
                    handleSubmit(e, form, updateBudget, budget);
                    onDone();
                }}>

                Submit
            </button>
        </form>
    );
};

export default class Transactions extends React.Component {
    state = {
        create: false
    };

    props: Props;

    handleCreateClick() {
        this.setState({ create: true });
    }

    handleDiscardClick() {
        this.setState({ create: false });
    }

    render() {
        const { create } = this.state;
        const { budget } = this.props;
        const btnCreate = (<button
            className="btn-create"
            onClick={() => { this.handleCreateClick(); }}>

            CREATE
        </button>);

        const btnDiscard = (<button
            className="btn-create"
            onClick={() => { this.handleDiscardClick(); }}>

            DISCARD
        </button>);

        const transactions = budget.transactions.map((t) => (
            <div className="transaction">
                <div>{ t.date }</div>
                <div>{ t.description }</div>
                <div>{ t.amount }</div>
            </div>
        ));

        return (
            <section className="transactions">
                <h2>Transactions</h2>

                { transactions }

                { (create) ?
                    <TransactionForm onDone={this.handleDiscardClick.bind(this)} {...this.props} />
                    :
                    null
                }
                { (create) ? btnDiscard : btnCreate }
            </section>
        );
    }
}
