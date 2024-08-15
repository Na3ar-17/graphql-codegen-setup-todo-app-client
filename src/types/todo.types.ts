import { ITodo } from '@/entities/todo.entity'

export interface IUpdateTodo
	extends Partial<Pick<ITodo, 'title' | 'isCompleted'>> {
	id: string
}
