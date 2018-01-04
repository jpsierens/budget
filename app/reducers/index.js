import { routerReducer as routing } from 'react-router-redux';
import { combineReducers } from 'redux';
import * as types from '../actions/types';


const budgets = (state = [], action) => {
    switch (action.type) {
        case types.ADD_BUDGET_SUCCESS:
            return [action.response, ...state];

        case types.REMOVE_BUDGET_SUCCESS:
            return state.filter((t) => t._id !== action.response._id );

        case types.UPDATE_BUDGET_SUCCESS:
            const { updates, budget } = action;
            return state.map(t => {
                if (t._id === budget._id) {
                    return Object.assign({}, budget, updates);
                }
                return t;
            });

        case types.MOVE_BUDGET:
            const newState = [...state];
            newState.splice(action.dragIndex, 1);
            return [
                ...newState.slice(0, action.hoverIndex),
                action.response,
                ...newState.slice(action.hoverIndex)
            ];

        default:
            return state;
    }
};

const categories = (state = [], action) => {
    switch (action.type) {
        case types.ADD_CATEGORY_SUCCESS:
            return [action.response, ...state];
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    budgets,
    categories,
    routing
});

export default rootReducer;
