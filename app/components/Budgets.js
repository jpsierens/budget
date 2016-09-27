import React, { PropTypes } from 'react';
import Budget from './Budget';
import CreateBudget from './CreateBudget';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

const handleMoveBudget = (budgets, moveBudget, indexes) => {
    const { dragIndex, hoverIndex } = indexes;

    return moveBudget(dragIndex, hoverIndex, budgets[dragIndex]);
};

class Budgets extends React.Component {
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

Budgets.propTypes = {
    budgets: PropTypes.array,
    onAddBudget: PropTypes.func,
    onRemoveBudget: PropTypes.func,
    updateBudget: PropTypes.func,
    moveBudget: PropTypes.func
};

export default DragDropContext(HTML5Backend)(Budgets);
