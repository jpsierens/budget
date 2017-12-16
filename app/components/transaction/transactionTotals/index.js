import React from 'react';
import { root, element } from './style.module.scss';

type Props = {
    total: string,
    revenues: string,
    expenses: string
};

console.log(element);

const TransactionTotals = ({ total, revenues, expenses } : Props) =>
	<div className={root}>
		<span className={element}>Total: { total }</span>
		<span className={element}>Revenues: { revenues }</span>
		<span className={element}>Expenses: { expenses }</span>
	</div>;

export default TransactionTotals;
