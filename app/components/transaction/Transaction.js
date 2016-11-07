import React from 'react';

type Props = {
	date: string,
	description: string,
	amount: number,
	isDragging: boolean
};

const Transaction = ({ date, description, amount, isDragging } = Props) =>
	<div className={`transaction ${isDragging ? 'dragging' : ''}`} >
        <div>{ date }</div>
        <div>{ description }</div>
        <div>{ amount }</div>
    </div>;

export default Transaction;
