// @flow
import React from 'react';
import { connect } from 'react-redux';
// import { addCategory, removeCategory, updateCategory, moveCategory } from '../actions';
import CategoryInput from '../components/categories/CategoryInput';

type Props = {
		categories: String[],
		onInputChange: () => void
};

const Categories = ({ categories, onInputChange } : Props) =>
		<div>
				<CategoryInput
						categories={categories}
						onInputChange={onInputChange} />
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

const CategoryContainer = connect(
    mapStateToProps,
    null
)(Categories);

export default CategoryContainer;
