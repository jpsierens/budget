// @flow
import React from 'react';
import * as rules from '../rules';
import handleUpdateItem from '../helpers/handleUpdateItem';
import withExit from '../helpers/withExit';
import { BudgetType } from '../types';

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

const BudgetEdit = ({ budget, updateBudget, router }: Props) => {
    const { name, note, _id, completed, updatedAt } = budget;
    const time = new Date(updatedAt);

    let nameInput;
    let noteInput;

    return (
        <div>
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
        </div>
    );
};

export default BudgetEdit;

