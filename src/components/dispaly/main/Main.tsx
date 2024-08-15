'use client'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'
import { Form, FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { ITodo } from '@/entities/todo.entity'
import { IUpdateTodo } from '@/types/todo.types'
import { Pencil, Trash2 } from 'lucide-react'
import { NextPage } from 'next'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import CardCompenent from './CardCompenent'
import './Main.css'
const todos: ITodo[] = [
	{
		id: '482a038e-e94c-403f-83f4-9862c205ab6b',
		createdAt: '2024-08-15T07:44:47.499Z',
		updatedAt: '2024-08-15T07:51:32.737Z',
		title: 'hello',
		isCompleted: true,
	},
	{
		id: '18a3d0ff-945e-48c0-89e9-ac67c232e429',
		createdAt: '2024-08-15T08:50:43.390Z',
		updatedAt: '2024-08-15T08:50:43.390Z',
		title: 'Untitled 1',
		isCompleted: false,
	},
]

const Main: NextPage = () => {
	return (
		<main className='flex justify-center p-10 min-h-screen'>
			<div className='w-[700px] flex flex-col gap-4'>
				<Button className='text-lg font-bold'>Create new todo</Button>
				{todos.map((el, i) => (
					<CardCompenent data={el} key={i} />
				))}
			</div>
		</main>
	)
}

export default Main
