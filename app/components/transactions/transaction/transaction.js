import React from 'react';

import { TransactionType } from '../../../types';
import parseStrToFixed from '../../../helpers/parseStrToFixed';
import {
	transaction as transactionStyle,
	category as categoryStyle
} from './style.module.scss';

const categoryBg = '#c5c5c5';

type Props = {
	data: TransactionType,
	updateTransaction: () => null
};

const Transaction = ({ data, updateTransaction } = Props) =>
	<div className={`${transactionStyle} transaction-table-row`} >
        <div>{ data.date }</div>
        <div>
						<div className="description">
								{ data.description }
						</div>
						<div
								className={`${categoryStyle}`}
								style={{ background: categoryBg}}>
								{ data.category }
						</div>
				</div>
        <div>{ parseStrToFixed(data.amount, 2) }</div>
				<i
						onClick={() => updateTransaction(data)}
						className="icon-edit"></i>
    </div>;

export default Transaction;
