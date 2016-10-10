import React from 'react';

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
        <form>
            <input
                type="date"
                ref={(e) => { form.date = e; }} />
            <textarea
                ref={(e) => { form.description = e; }} />
            <input
                type="number"
                ref={(e) => { form.amount = e; }} />
            <checkbox
                name="Income"
                ref={(e) => { form.income = e; }} />
            <select
                ref={(e) => { form.category = e; }}>

                <option value="other">Other</option>
            </select>
            <button
                onClick={() => { handleSubmit(form); }} />
        </form>
    );
};

export default class Transactions extends React.Component {
    state = {
        create: false
    };

    handleCreateClick() {
        this.setState({ create: true });
    }

    handleSaveClick() {
        this.setState({ create: false });
    }

    render() {
        const btnCreate = (<button
            className="btn-create"
            onClick={() => { this.handleCreateClick(); }}>

            CREATE
        </button>);

        const btnSave = (<button
            className="btn-create"
            onClick={() => { this.handleSaveClick(); }}>

            SAVE
        </button>);

        return (
            <section className="transactions">
                <h2>Transactions</h2>
                <div className="transaction">
                    <div>9/30/2016</div>
                    <div>Some description of a bought item</div>
                    <div>$15.00</div>
                </div>
                { (this.state.create) ? TransactionForm : null }
                { (this.state.create) ? btnSave : btnCreate }
            </section>
        );
    }
}
