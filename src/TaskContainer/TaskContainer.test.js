import React from 'react';
import ReactDOM from 'react-dom';
import TaskContainer from './';
import { shallow } from 'enzyme';

describe('TaskContainer', () => {
	let wrapper;
	let mockTasks;

	beforeEach(() => {
		mockTasks = [
			{
				task: 'Feed cat',
				error: '',
				id: 123
			},
			{
				task: 'Walk dog',
				error: '',
				id: 456
			},
			{
				task: 'Make weekend plans',
				error: '',
				id: 789
			},
		]
		wrapper = shallow(<TaskContainer tasks={mockTasks}/>)
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	it('', () => {})
})