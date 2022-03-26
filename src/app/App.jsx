import React, { useState, useEffect } from 'react'
import {
	Wrapper, Container, Input, Button,
} from '../components'
import {
	TypoCenter, AddTask, List, ListItem, Actions, ChangebleTask, Item, Edit,
} from './styled'

const App = () => {
	const [todo, setTodo] = useState('')
	const [tasks, setTasks] = useState([])
	const [editableTask, setEditableTask] = useState()
	const [editableTodo, setEditableTodo] = useState('')

	const handleTask = (event) => setTodo(event.target.value)

	const addTasks = () => {
		if (todo.length !== 0) {
			setTasks([...tasks, todo])
			setTodo('')
		}
	}

	const deleteTask = (index) => {
		setTasks(
			[...tasks.slice(0, index), ...tasks.slice(index + 1)],
		)
	}

	const editTask = (index) => {
		setEditableTodo(tasks[index])
		setEditableTask(index)
	}

	const handleEditableTask = (event) => setEditableTodo(event.target.value)

	const changeTask = (index) => {
		if (editableTask === index) {
			const tasksArray = [...tasks]
			tasksArray[index] = editableTodo

			setTasks([...tasksArray])
			setEditableTodo('')
			setEditableTask()
		}
	}

	const cancelTask = (index) => {
		if (editableTask === index) {
			setEditableTask()
		}
	}

	useEffect(() => {
		setTasks(JSON.parse(localStorage.getItem('tasks')))
	}, [])

	useEffect(() => {
		localStorage.setItem('tasks', JSON.stringify(tasks))
	}, [tasks])

	return (
		<Wrapper>
			<TypoCenter as="h1" size="1">Your perfect to-do list</TypoCenter>
			<Container>
				<AddTask>
					<Input type="text" spellcheck="true" value={todo} onChange={handleTask} />
					<Button type="submit" onClick={addTasks} variant="primary">Do it!</Button>
				</AddTask>
				<List>
					{tasks.map((item, index) => (
						<ListItem size="2" key={index}>
							{(editableTask === index)
								? (
									<ChangebleTask id={index}>
										<Edit type="text" spellcheck="true" value={editableTodo} onChange={handleEditableTask} />
									</ChangebleTask>
								) : (
									<Item>{item}</Item>
								)}
							<Actions key={index}>
								{(editableTask === index)
									? (
										<>
											<Button type="submit" onClick={() => changeTask(index)} variant="save" form={index} />
											<Button type="button" onClick={() => cancelTask(index)} variant="cancel" />
										</>
									) : (
										<>
											<Button type="button" onClick={() => deleteTask(index)} variant="remove" />
											<Button type="button" onClick={() => editTask(index)} variant="edit" />
										</>
									)}
							</Actions>
						</ListItem>
					))}
				</List>
			</Container>
		</Wrapper>
	)
}

export default App
