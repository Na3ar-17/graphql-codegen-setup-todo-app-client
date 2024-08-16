'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ITodo } from '@/entities/todo.entity'
import { DeleteTodoMutation, Exact, Scalars } from '@/gql/graphql'
import { IUpdateTodo } from '@/types/todo.types'
import {
	ApolloCache,
	DefaultContext,
	MutationFunctionOptions,
} from '@apollo/client'
import { Pencil, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import { Form, useForm } from 'react-hook-form'

interface IProps {
	data: ITodo
	deleteTodo?: (
		options?:
			| MutationFunctionOptions<
					DeleteTodoMutation,
					Exact<{ id: string }>,
					DefaultContext,
					ApolloCache<any>
			  >
			| undefined
	) => Promise
}

const CardCompenent: NextPage<IProps> = ({ data, deleteTodo }) => {
	const [isEdit, setIsEdit] = useState<boolean>(false)
	const form = useForm<IUpdateTodo>({
		mode: 'onChange',
		defaultValues: data,
	})
	return (
		<Card>
			<Form {...form}>
				<form className='content'>
					<CardHeader>
						<CardTitle className='text-lg flex items-center gap-2 first-letter:uppercase'>
							{isEdit ? (
								<FormField
									control={form.control}
									name='title'
									render={({ field: { value, onChange } }) => (
										<Input
											className='w-full'
											onChange={onChange}
											value={value}
										/>
									)}
								/>
							) : (
								data.title
							)}
							{isEdit && <Button variant={'outline'}>Save</Button>}
						</CardTitle>
					</CardHeader>
					<CardContent className='flex items-center gap-7 p-0'>
						<div className='flex items-center gap-4'>
							<Pencil
								onClick={() => setIsEdit(!isEdit)}
								className='size-5 text-primary cursor-pointer transition-all  opacity-0 invisible icon'
							/>
							<Trash2
								onClick={() => deleteTodo({ variables: { id: data.id } })}
								className='size-5 text-destructive cursor-pointer transition-all  opacity-0 invisible icon'
							/>
						</div>
						<FormField
							control={form.control}
							name='isCompleted'
							render={({ field: { value, onChange } }) => (
								<Checkbox checked={value || false} onCheckedChange={onChange} />
							)}
						/>
					</CardContent>
				</form>
			</Form>
		</Card>
	)
}

export default CardCompenent
