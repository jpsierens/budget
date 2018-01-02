// @flow
import React from 'react';

type Props = {
}

class CategoryForm extends React.Component {

	state = {
		category: ''
	};

	props: Props;

	handleChange() {
		this.setState({ category: this.input.value });
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
	        </div>
	    );
	}
}

export default CategoryForm;
