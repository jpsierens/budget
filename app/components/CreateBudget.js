import React, { PropTypes } from 'react';
import * as rules from '../rules';

const handleFormSubmit = (nameInput, noteInput, onCreate) => {
    const name = nameInput.value;
    const note = noteInput.value;

    if (!name || !note) return;

    onCreate({ name, note });
    nameInput.value = '';
    noteInput.value = '';
};

const CreateBudget = ({ onCreate }) => {
    let nameInput;
    let noteInput;

    return (
        <form className="create-budget">
            <input
                type="text"
                maxLength={`${rules.NAME_LENGTH}`}
                placeholder="Title"
                required
                ref={r => {
                    nameInput = r;
                }} />

            <textarea
                maxLength={`${rules.NOTE_INPUT}`}
                placeholder="Note"
                required
                ref={r => {
                    noteInput = r;
                }}>
            </textarea>

            <button
                type="submit"
                onClick={(e) => {
                    e.preventDefault();
                    handleFormSubmit(nameInput, noteInput, onCreate);
                }}>

                SUBMIT
            </button>
        </form>
    );
};

CreateBudget.propTypes = {
    onCreate: PropTypes.func
};

export default CreateBudget;
