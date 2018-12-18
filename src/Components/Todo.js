import React, { Component } from 'react';
import './Todo.css';

class Todo extends Component {
	constructor(props){
		super(props);
		this.activityOnChange = this.activityOnChange.bind(this);
	}

	activityOnChange(input){
		console.log(input);
	}

	render() {
		return (
			<div>
				<input type="text" onChange={this.activityOnChange} />
			</div>
		);
	}
}

export default Todo;