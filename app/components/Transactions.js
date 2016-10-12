import React from 'react';
import { BudgetType } from '../types';

const handleSubmit = (data) => {
    const { date, description, amount, income, category } = data;

    if ( !date && !description && !amount && !income && !category ) {
        return alert('Please fill all fields');
    }

    return true;
};

const TransactionForm = () => {
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
                    e.preventDefault();
                    handleSubmit(form);
                }}>

                Submit
            </button>
        </form>
    );
};

type Props = {
    budget: BudgetType,
    updateBudget: () => void
};

export default class Transactions extends React.Component {
    state = {
        create: false
    };

    props: Props;

    handleCreateClick() {
        this.setState({ create: true });
    }

    handleSaveClick() {
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
            onClick={() => { this.handleSaveClick(); }}>

            DISCARD
        </button>);

        return (
            <section className="transactions">
                <h2>Transactions</h2>
                <div className="transaction">
                    <div>9/30/2016</div>
                    <div>Some description of a bought item</div>
                    <div>$15.00</div>
                </div>

                { (create) ? <TransactionForm budget={budget} /> : null }
                { (create) ? btnDiscard : btnCreate }
            </section>
        );
    }
}
