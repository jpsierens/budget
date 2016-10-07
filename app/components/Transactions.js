import React from 'react';

const Transactions = () => {
    return (
        <section className="transactions">
            <h2>Transactions</h2>
            <div className="transaction">
                <div>9/30/2016</div>
                <div>Some description of a bought item</div>
                <div>$15.00</div>
            </div>
            <button
                className="btn-create"
                onClick={() => {}}>

                CREATE
            </button>
        </section>
    );
};

export default Transactions;
