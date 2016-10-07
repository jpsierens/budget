// @flow
import React from 'react';
import { withRouter } from 'react-router';
import { BudgetType } from '../types';
import BudgetEdit from './BudgetEdit';
import Transactions from './Transactions';

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

            <Transactions />

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
