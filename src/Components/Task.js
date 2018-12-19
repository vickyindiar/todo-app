import React, { Component } from 'react';

class Task extends Component {
	constructor(props){
		super(props)
		this.state = {items: this.props.item};
	}

	render() {
		var items = this.state.items;
		var list = items.map((item)=>
			<li>{item}</li>
		);
		return (
			<div>
				<ul>
					{list}
				</ul>
			</div>
		);
	}
}

export default Task;