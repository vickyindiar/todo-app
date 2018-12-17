import React, { Component } from 'react';

class Home extends Component {
	constructor(props){
		super(props);
		this.state = {owner:props.owner};
		this.onHomeInit = this.onHomeInit.bind(this);

	}
	onHomeInit(initiator){
	   console.log(initiator);
	}

	render() {
		return (
			<div>
				This is home {this.state.owner}
				<hr />
				{this.props.children}
			</div>
		);
	}
}

export default Home;