export interface ITodo {
	id: string

	createdAt: Date | string

	updatedAt: Date | string

	title: string

	isCompleted?: boolean | null
}
