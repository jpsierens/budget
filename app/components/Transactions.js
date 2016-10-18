import React from 'react';
import { BudgetType } from '../types';
import TransactionForm from './TransactionForm';

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

            DISCARD TRANSACTION
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

                <div className="transaction-list">
                    { transactions }
                </div>

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
