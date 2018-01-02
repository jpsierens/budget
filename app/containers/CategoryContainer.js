// @flow
import React from 'react';
import { connect } from 'react-redux';
// import { addCategory, removeCategory, updateCategory, moveCategory } from '../actions';
import CategoryInput from '../components/categories/CategoryInput';
import CategoryForm from '../components/categories/CategoryForm';

type Props = {
	categories: String[],
	onInputChange: () => void
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
		const { categories, onInputChange } = this.props;

		return (
			<div>
				<CategoryInput
					categories={categories}
					onInputChange={onInputChange} />
			{ this.state.showForm ?
				<CategoryForm />
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

const CategoryContainer = connect(
    mapStateToProps,
    null
)(Categories);

export default CategoryContainer;
