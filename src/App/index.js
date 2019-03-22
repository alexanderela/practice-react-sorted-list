import React, { Component } from 'react';
import './App.css';
import NewTaskForm from '../NewTaskForm';
import TaskContainer from '../TaskContainer';
const uuid = require('uuidv4');

class App extends Component {
	constructor() {
		super()
		this.state = {
			tasks: []
		}
	}

	addTask = (task) => {
		const newTask = {...task, id: uuid()}
		const tasks = [...this.state.tasks, newTask]
		this.setState({ tasks })
	}

  render() {
  	const { tasks } = this.state;

    return (
      <div className="App">
        <NewTaskForm addTask={this.addTask}/>
        <TaskContainer tasks={tasks}/>
      </div>
    );
  }
}

export default App;
