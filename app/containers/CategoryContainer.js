// @flow
import React from 'react';
import { connect } from 'react-redux';
import { addCategory } from '../actions';
import CategoryInput from '../components/categories/CategoryInput';
import CategoryForm from '../components/categories/CategoryForm';

type Props = {
	categories: String[],
	onInputChange: () => void,
	onAddCategory: () => void,
};

class Categories extends React.Component {

	state = {
	    showForm: false
	};

	props: Props;

	showForm(e) {
		e.preventDefault();
		this.setState({ showForm: true });
	}

	render() {
		const { categories, onInputChange, onAddCategory } = this.props;

		return (
			<div>
				<CategoryInput
					categories={categories}
					onInputChange={onInputChange} />
			{ this.state.showForm ?
				<CategoryForm onAddCategory={onAddCategory} />
				:
				<button
					onClick={this.showForm.bind(this)}>
					add more categories
				</button>
			}
			</div>
		);
	}
}


const mapStateToProps = (state) => {
    return {
        categories: state.categories
    };
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddCategory: c => dispatch(addCategory(c))
	};
};

const CategoryContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Categories);

export default CategoryContainer;
