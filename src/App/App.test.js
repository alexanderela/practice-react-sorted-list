import React from 'react';
import ReactDOM from 'react-dom';
import App from './';
import { shallow } from 'enzyme';

describe('App', () => {
	let wrapper
	let mockStateTasks
	let mockNewTaskDefault
	let mockNewTaskTop
	let mockNewTaskBottom
	let expected

	beforeEach(() => {
		wrapper = shallow(<App />)
		mockStateTasks = [
			{
				task: 'Feed cat',
				error: ''
			},
			{
				task: 'Walk dog',
				error: ''
			},
			{
				task: 'Make weekend plans',
				error: ''
			},
		]
		mockNewTaskDefault = {
				task: 'Ze end task',
				error: ''
			}

		mockNewTaskTop = {
				task: 'A new task',
				error: ''
			}

		mockNewTaskBottom = {
			task: 'New middle task',
			error: ''
		}

		wrapper.setState({ tasks: mockStateTasks })
	})

	it('renders like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	describe('addTask', () => {
		it('leaves task where it is by default', () => {
			expected = 'Ze end task'
			wrapper.instance().addTask(mockNewTaskDefault)
			expect(wrapper.state().tasks[3].task).toEqual(expected)
		})

		it('moves task down if new task is greater', () => {
			expected = 'A new task'
			wrapper.instance().addTask(mockNewTaskTop)
			expect(wrapper.state().tasks[0].task).toEqual(expected)
		})

		it('moves task up if new task is greater', () => {
			expected = 'New middle task'
			wrapper.instance().addTask(mockNewTaskBottom)
			expect(wrapper.state().tasks[2].task).toEqual(expected)
		})
	})
});
