import React from 'react';

const TaskContainer = ({ tasks }) => {
	const taskCards = tasks.map(task => {
		return <li key={task.id}>{task.task}</li>
	})

	return(
		<ol className='TaskContainer'>
			{taskCards}
		</ol>
	)
}

export default TaskContainer;