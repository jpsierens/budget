import React from 'react';
import { transaction } from './style.module.scss';

import parseStrToFixed from '../../../helpers/parseStrToFixed';

type Props = {
	date: string,
	description: string,
	amount: number,
	isDragging: boolean,
	updateTransaction: () => null
};

const Transaction = ({ date, description, amount, isDragging, updateTransaction } = Props) =>
	<div className={`${transaction} transaction-table-row ${isDragging ? 'dragging' : ''}`} >
        <div>{ date }</div>
        <div>{ description }</div>
        <div>{ parseStrToFixed(amount, 2) }</div>
				<i
						onClick={() => updateTransaction()}
						className="icon-edit"></i>
    </div>;

export default Transaction;
