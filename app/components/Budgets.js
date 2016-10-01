// @flow
import React from 'react';
import Budget from './Budget';
import CreateBudget from './CreateBudget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { BudgetType } from '../types';

const handleMoveBudget = (budgets, moveBudget, indexes) => {
    const { dragIndex, hoverIndex } = indexes;

    return moveBudget(dragIndex, hoverIndex, budgets[dragIndex]);
};

type Props = {
    budgets: BudgetType[],
    onAddBudget: () => void,
    onRemoveBudget: () => void,
    updateBudget: () => void,
    moveBudget: () => void
};

class Budgets extends React.Component {
    props: Props;

    render() {
        const { budgets, onAddBudget, onRemoveBudget, updateBudget, moveBudget } = this.props;

        return (
            <div className="budgets">
                <CreateBudget onCreate={onAddBudget} />
                {
                    budgets.map((t, i) =>
                        <Budget
                            key={t.updatedAt}
                            index={i}
                            onRemove={onRemoveBudget}
                            updateBudget={updateBudget}
                            onMoveBudget={(indexes) => {
                                handleMoveBudget(budgets, moveBudget, indexes);
                            }}
                            {...t}/>
                    )
                }
            </div>
        );
    }
}

export default DragDropContext(HTML5Backend)(Budgets);
