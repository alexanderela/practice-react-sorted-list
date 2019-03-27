import React, { Component } from 'react';
import './NewTaskForm.css';

class NewTaskForm extends Component {
	constructor(props) {
		super(props)
		this.state = {
			task: '',
			error: ''
		}
	}

	handleInput = (e) => {
		const task = e.target.value;
		this.setState({ task })
	}

	handleSubmit = (e) => {
		e.preventDefault()
		const task = this.state.task.trim()
		if(task.length) {
			this.setState({ task })
			this.props.addTask(this.state)
			this.setState({ task: '', error: '' })
		} else {
			this.setState({ error: 'Please enter a task that is at least 1 letter long.' })
		}
	}

	render() {
		const { task, error } = this.state

		return (
			<form 
				className='NewTaskForm'
				onSubmit={this.handleSubmit}
			>
				<input 
					placeholder='Enter new task'
					name='task'
					value={task}
					onChange={this.handleInput}
				/>
				<button>Submit task</button>
				<h3 className='form-error'>{error.length ? error : ''}</h3>
			</form>
		)
	}
}

export default NewTaskForm;