// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { BudgetType } from '../types';
import BudgetEdit from './BudgetEdit';

type Props = {
    budget: BudgetType,
    onRemove: () => void,
    router: Object
};

const BudgetDetail = (props: Props) => {
    const { budget, onRemove, router } = props;
    const { _id, completed } = budget;

    return (
        <div className={`budget budget-detail ${ completed ? 'done' : ''}`}>
            <BudgetEdit {...props}/>

            <hr />

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

            <span
                className="close-budget"
                onClick={(e) => {
                    e.preventDefault();
                    onRemove(_id);
                    router.push('/');
                }}>

                X
            </span>
        </div>
    );
};

export default withRouter(BudgetDetail);
