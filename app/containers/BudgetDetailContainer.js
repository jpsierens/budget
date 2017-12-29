// @flow
import { connect } from 'react-redux';
import { removeBudget, updateBudget } from '../actions';
import BudgetDetail from '../components/BudgetDetail';

const mapStateToProps = (state, props) => {
    const { index } = props.params;

    return {
        indexParam: index,
        budget: state.budgets[index]
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onRemove: (id) => dispatch(removeBudget(id)),
        updateBudget: (id, updates) =>
            dispatch(updateBudget(id, updates))
    };
};

const BudgetDetailContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(BudgetDetail);

export default BudgetDetailContainer;
