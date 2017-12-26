// @flow
import React from 'react';
import { connect } from 'react-redux';
// import { addCategory, removeCategory, updateCategory, moveCategory } from '../actions';
import CategoryInput from '../components/categories/CategoryInput';

const Categories = () =>
		<div>
				<CategoryInput
						type={this.state.type}
						onInputChange={this.handleInputChange} />

				<button
						onClick={(e)=> e.preventDefault()}>
						add more categories
				</button>
		</div>;


const mapStateToProps = (state, props) => {
    const { index } = props.params;

    return {
        categories: state.categories[index]
    };
};

const mapDispatchToProps = () => {
    return {
        // onRemove: (id) => dispatch(removeCategory(id)),
        // updateCategory: (id, updates) =>
        //     dispatch(updateCategory(id, updates))
    };
};

const CategoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

export default CategoryContainer;
