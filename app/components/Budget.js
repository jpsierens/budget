// @flow
import React from 'react';
import { Link } from 'react-router';
import handleUpdateItem from '../helpers/handleUpdateItem';
import withListDragAndDrop from '../helpers/withListDragAndDrop';

type Props = {
    _id: string,
    index: number,
    name: string,
    note: string,
    completed: boolean,
    updatedAt: string,
    onRemove: () => void,
    updateBudget: () => void,
    isDragging: boolean,
};

const Budget = (props: Props) => {
    const {
        _id,
        index,
        name,
        note,
        completed,
        updatedAt,
        onRemove,
        updateBudget,
        isDragging
    } = props;

    const time = new Date(updatedAt);

    return (
        <div className={`budget ${ completed ? 'done' : ''} ${isDragging ? 'dragging' : ''}`}>
            <Link to={`/${index}`}>
                <h2> { name } </h2>
                <p> { note} </p>
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
                </div>
                <span
                    className="close-budget"
                    onClick={(e) => {
                        e.preventDefault();
                        onRemove(_id);
                    }}>

                    X
                </span>
            </Link>
        </div>
    );
};

export default withListDragAndDrop(Budget);
