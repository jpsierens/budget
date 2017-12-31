// @flow
import React from 'react';
import { connect } from 'react-redux';
// import { addCategory, removeCategory, updateCategory, moveCategory } from '../actions';
import CategoryInput from '../components/categories/CategoryInput';

type Props = {
		categories: String[]
};

const Categories = ({ categories } : Props) =>
		<div>
				<CategoryInput
						categories={categories}
						onInputChange={this.handleInputChange} />
				<button
						onClick={(e)=> e.preventDefault()}>
						add more categories
				</button>
		</div>;


const mapStateToProps = (state) => {
    return {
        categories: state.categories
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
