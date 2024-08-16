'use client'
import { Button } from '@/components/ui/button'
import { graphql } from '@/gql'
import { useMutation, useQuery } from '@apollo/client'
import { NextPage } from 'next'
import CardCompenent from './CardCompenent'
import './Main.css'

const findAllQuery = graphql(`
	query findAllTodos {
		findAll {
			id
			createdAt
			title
			isCompleted
			updatedAt
		}
	}
`)

const createTodoMutation = graphql(`
	mutation createTodo {
		craete {
			id
			createdAt
			title
			isCompleted
			updatedAt
		}
	}
`)

const deleteTodoMutation = graphql(`
	mutation deleteTodo($id: String!) {
		delete(id: $id) {
			id
			createdAt
			title
			isCompleted
			updatedAt
		}
	}
`)

const Main: NextPage = () => {
	const { data, loading, error } = useQuery(findAllQuery)

	const [mutation] = useMutation(createTodoMutation, {
		refetchQueries: ['findAllTodos'],
	})
	const [deleteTodo] = useMutation(deleteTodoMutation, {
		refetchQueries: ['findAllTodos'],
	})

	if (loading) {
		return <div>Loading...</div>
	}

	if (error || !data) {
		return <div>Error</div>
	}
	return (
		<main className='flex justify-center p-10 min-h-screen'>
			<div className='w-[700px] flex flex-col gap-4'>
				<Button onClick={() => mutation()} className='text-lg font-bold'>
					Create new todo
				</Button>

				{data.findAll.map((el, i) => (
					<CardCompenent deleteTodo={deleteTodo} data={el} key={i} />
				))}
			</div>
		</main>
	)
}

export default Main
