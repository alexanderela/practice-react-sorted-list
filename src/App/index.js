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
		const unsortedTasks = [...this.state.tasks, newTask]
		const tasks = unsortedTasks.sort((a, b) => {
			const task1 = a.task.toLowerCase()
			const task2 = b.task.toLowerCase()

			if(task1 < task2) {
				return -1
			}
			if(task1 > task2) {
				return 1
			}

			return 0
		})

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
