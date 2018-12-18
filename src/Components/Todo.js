import React, { Component } from 'react';
import '../Todo.css';

class Todo extends Component {
	constructor(props){
		super(props);
		this.activityOnChange = this.activityOnChange.bind(this);
		this.state = {items:[]}
	}

	activityOnChange(e){
		var target = e.target;
		var container = this.state.items;
		if(e.keyCode == 13){
			container.push(target.value);
			this.setState({items: container});
			target.value="";
		}

		console.log(this.state.items);
	}

	render() {
		return (
			<div className="the-data">
				<input type="text" onKeyDown={this.activityOnChange}/>
			</div>
		);
	}
}

export default Todo;