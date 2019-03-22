import React, { Component } from 'react';
import './NewTaskForm.css';

class NewTaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			task: ''
		}
	}

	handleInput = (e) => {
		const task = e.target.value
		this.setState({ task })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		this.props.addTask(this.state)
	}

	render() {
		return (
			<form 
				className='NewTaskForm'
				onSubmit={this.handleSubmit}
			>
				<input 
					placeholder='Enter new task'
					name='task'
					value={this.state.task}
					onChange={this.handleInput}
				/>
				<button>Submit task</button>
			</form>
		)
	}
}

export default NewTaskForm;