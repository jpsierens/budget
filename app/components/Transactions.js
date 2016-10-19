import React from 'react';
import { BudgetType } from '../types';
import TransactionForm from './TransactionForm';
import Transaction from './Transaction';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

type Props = {
    budget: BudgetType,
    updateBudget: () => void
};

class Transactions extends React.Component {
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
            <Transaction {...t} key={t._id} />
        ));

        return (
            <section className="transactions">
                <h2>Transactions</h2>

                <div className="transaction">
                    <div>DATE</div>
                    <div>DESCRIPTION</div>
                    <div>AMOUNT</div>
                </div>

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

export default DragDropContext(HTML5Backend)(Transactions);

