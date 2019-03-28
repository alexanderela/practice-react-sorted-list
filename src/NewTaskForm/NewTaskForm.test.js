import React from 'react';
import ReactDOM from 'react-dom';
import NewTaskForm from './';
import { shallow } from 'enzyme';

describe('NewTaskForm', () => {
	let wrapper;
	let mockEvent;
	let expected;
	let mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn()
		wrapper = shallow(<NewTaskForm addTask={mockFunc}/>)
		mockEvent = {
			target: {
				value: 'Example typed task'
			},
			preventDefault: jest.fn()
		}
	})

	it('should render like snapshot', () => {
		expect(wrapper).toMatchSnapshot()
	})

	describe('handleInput', () => {
		it('should setState when user inputs task', () => {
			expected = 'Example typed task'
			wrapper.instance().handleInput(mockEvent)
			expect(wrapper.state().task).toEqual(expected)
			expect(wrapper.state().error).toEqual('')
		})
	})

	describe('handleSubmit', () => {		
		it('should invoke addTask if input has length', () => {
			mockEvent = {
				target: {
					value: 'Input text has length'
				},
				preventDefault: jest.fn()
			}		
			wrapper.setState({ task: 'Input text has length'})
			wrapper.instance().handleSubmit(mockEvent)
			expect(wrapper.instance().props.addTask).toHaveBeenCalled()
		})
		
		it('should clear input if input has length', () => {
			mockEvent = {
				target: {
					value: 'Input text has length'
				},
				preventDefault: jest.fn()
			}		
			wrapper.setState({ task: 'Input text has length'})
			wrapper.instance().handleSubmit(mockEvent)
			expect(wrapper.state().task).toEqual('')
			expect(wrapper.state().error).toEqual('')
		})
		
		it('should set error message to state if input has no length', () => {
			mockEvent = {
				target: {
					value: ''
				},
				preventDefault: jest.fn()
			}
			expected = 'Please enter a task that is at least 1 letter long.'
			wrapper.setState({ task: '' })
			wrapper.instance().handleSubmit(mockEvent)
			expect(wrapper.state().error).toEqual(expected)					
		})
	})

})