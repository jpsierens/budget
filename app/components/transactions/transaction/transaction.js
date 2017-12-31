import React from 'react';

import { TransactionType } from '../../../types';
import { transaction } from './style.module.scss';
import parseStrToFixed from '../../../helpers/parseStrToFixed';

type Props = {
	data: TransactionType,
	updateTransaction: () => null
};

const Transaction = ({ data, updateTransaction } = Props) =>
	<div className={`${transaction} transaction-table-row`} >
        <div>{ data.date }</div>
        <div>{ data.description }</div>
        <div>{ parseStrToFixed(data.amount, 2) }</div>
				<i
						onClick={() => updateTransaction(data)}
						className="icon-edit"></i>
    </div>;

export default Transaction;
