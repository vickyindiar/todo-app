import React, { Component } from 'react';
import '../Todo.css';
import Task from './Task';

class Todo extends Component {
	constructor(props){
		super(props);
		this.taskOnKeyDown = this.taskOnKeyDown.bind(this);
		this.inputOnFocus = this.inputOnFocus.bind(this);
		this.state = {items:[]}
	}

	taskOnKeyDown(e){
		var target = e.target;
		var container = this.state.items;
		if(e.keyCode === 13 && target.value !== ''){
			container.push(target.value);
			this.setState({items: container});
			target.value="";
		}
		
	}

	inputOnFocus(e){
		var target = e.target;
		console.log(e.currentTarget);
		console.log(e.detail);
	}

	render() {
		var taskList = this.state.items;
		return (
			<div>
				<div className="todo-container">
					<div className="panel">
						<div className="panel-head"><label htmlFor="">Enter a task :</label></div>
						<div className="panel-body">
							<div className="input-container">
								<input type="text" placeholder="Enter a task" onKeyDown={this.taskOnKeyDown} onFocus={this.inputOnFocus}/>
							</div>
						</div>
					</div>
					<div className="panel">
						<div className="panel-head"><label htmlFor="">Task list :</label></div>
						<div className="panel-body">
							<Task item={taskList}></Task>
						</div>
					</div>
					
				</div>
			</div>
		);
	}
}

export default Todo;