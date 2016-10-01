// @flow
import { connect } from 'react-redux';
import { addBudget, removeBudget, updateBudget, moveBudget } from '../actions';
import Budgets from '../components/Budgets';

const mapStateToProps = (state) => {
    return {
        budgets: state.budgets
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onAddBudget: (budget) => dispatch(addBudget(budget)),
        onRemoveBudget: (id) => dispatch(removeBudget(id)),
        updateBudget: (id, updates) =>
            dispatch(updateBudget(id, updates)),
        moveBudget: (dragIndex, hoverIndex, budget) =>
            dispatch(moveBudget(dragIndex, hoverIndex, budget))
    };
};

const BudgetsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Budgets);

export default BudgetsContainer;
