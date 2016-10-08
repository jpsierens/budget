import React from 'react';

export default class Transactions extends React.Component {
    state = {
        create: false
    };

    handleCreateClick() {
        console.log('hola');
        this.setState({ create: true });
    }

    handleSaveClick() {
        console.log('adios');
        this.setState({ create: false });
    }

    render() {
        const btnCreate = (<button
            className="btn-create"
            onClick={() => { this.handleCreateClick.bind(this); }}>

            CREATE
        </button>);

        const btnSave = (<button
            className="btn-create"
            onClick={() => { this.handleSaveClick.bind(this); }}>

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
                { (this.state.create) ? btnSave : btnCreate }
            </section>
        );
    }
}
