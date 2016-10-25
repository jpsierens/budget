// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { BudgetType } from '../types';
import BudgetEdit from './BudgetEdit';
import TransactionsContainer from '../containers/TransactionsContainer';

type Props = {
    budget: BudgetType,
    onRemove: () => void,
    updateBudget: () => void,
    router: Object
};

const BudgetDetail = (props: Props) => {
    const { budget, onRemove, router, updateBudget } = props;
    const { _id, completed } = budget;

    return (
        <div className={`budget budget-detail ${ completed ? 'done' : ''}`}>
            <BudgetEdit {...props}/>

            <hr />

            <TransactionsContainer budget={budget} updateBudget={updateBudget} />

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
