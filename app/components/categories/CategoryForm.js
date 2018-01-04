// @flow
import React from 'react';

type Props = {
	onAddCategory: () => void
}

class CategoryForm extends React.Component {

	state = {
		category: ''
	};

	props: Props;

	handleChange() {
		this.setState({ category: this.input.value });
	}

	submit(e) {
		e.preventDefault();
		this.props.onAddCategory(this.state.category);
		this.setState({ category: '' });
	}

	render() {
		return (
	        <div>
	            <label>Add a Category</label>
				{ this.state.category }
				<input
					ref={(e) => { this.input = e; }}
					value={this.state.category}
					onChange={this.handleChange.bind(this)} />
				<button
					onClick={this.submit.bind(this)}>
					Submit Category
				</button>
	        </div>
	    );
	}
}

export default CategoryForm;
