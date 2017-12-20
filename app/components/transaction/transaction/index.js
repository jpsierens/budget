import React from 'react';

import parseStrToFixed from '../../../helpers/parseStrToFixed';

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
        <div>{ parseStrToFixed(amount, 2) }</div>
				<i className="icon-edit"></i>
    </div>;

export default Transaction;
