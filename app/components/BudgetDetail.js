// @flow
import React from 'react';
import { withRouter } from 'react-router';
import handleUpdateItem from '../helpers/handleUpdateItem';
import withExit from '../helpers/withExit';
import { BudgetType } from '../types';
import * as rules from '../rules';

const handleSave = (router, nameInput, noteInput, params) => {
    const newName = nameInput.value;
    const newNote = noteInput.value;

    if (!newName || !newNote) return;

    params.push({
        name: newName,
        note: newNote
    });

    withExit(handleUpdateItem)(router, '/', params);
};

type Props = {
    budget: BudgetType,
    onRemove: () => void,
    updateBudget: () => void,
    router: Object
};

const BudgetDetail = ({ budget, updateBudget, onRemove, router }: Props) => {
    const { name, note, _id, completed, updatedAt } = budget;
    const time = new Date(updatedAt);

    let nameInput;
    let noteInput;

    return (
        <div className={`budget budget-detail ${ completed ? 'done' : ''}`}>
            <form>
                <input
                    type="text"
                    defaultValue={name}
                    maxLength={`${rules.NAME_LENGTH}`}
                    ref={(ref) => { nameInput = ref; }}/>

                <textarea
                    rows="10"
                    cols="50"
                    defaultValue={note}
                    maxLength={`${rules.NOTE_LENGTH}`}
                    ref={(ref) => { noteInput = ref; }}/>
            </form>

            <div>
                <button
                    className="btn-status"
                    onClick={(e) => handleUpdateItem(e, updateBudget, _id, {
                        completed: !completed
                    })}>

                    Status: { completed ? 'Done' : 'Not Done'}
                </button>
                <span className="datetime">
                    Last Updated: { time.toLocaleString() }
                </span>
                <button
                    className="btn-save"
                    onClick={(e) => handleSave(router, nameInput, noteInput, [e, updateBudget, _id])}>

                    SAVE
                </button>
            </div>

            <hr />

            <section className="transactions">
                <h2>Transactions</h2>
                <div className="transaction">
                    <div>9/30/2016</div>
                    <div>Some description of a bought item</div>
                    <div>$15.00</div>
                </div>
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
