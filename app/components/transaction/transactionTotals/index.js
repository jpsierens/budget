import React from 'react';
import { root, element } from './style.module.scss';

import parseStrToFixed from '../../../helpers/parseStrToFixed';

type Props = {
    total: string,
    revenues: string,
    expenses: string
};

const TransactionTotals = ({ total, revenues, expenses } : Props) =>
	<div className={root}>
		<span className={element}>Total: { parseStrToFixed(total, 2) }</span>
		<span className={element}>Revenues: { parseStrToFixed(revenues, 2) }</span>
		<span className={element}>Expenses: { parseStrToFixed(expenses, 2) }</span>
	</div>;

export default TransactionTotals;
