import React, { useState } from 'react';

interface TodoItem {
	id: string;
	task: string;
	completed: boolean;
	isEditing: boolean;
}

interface EditTodoFormProps {
	editTodo: (task: string, id: string) => void;
	task: TodoItem;
}

export const EditTodoForm = ({ editTodo, task }: EditTodoFormProps): JSX.Element => {
	const [value, setValue] = useState<string>(task.task);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();
		editTodo(value, task.id);
		setValue("");
	};

	return (
		<form className="EditTodoForm" onSubmit={handleSubmit}>
			<input
				type="text"
				className="outline-none border-2 border-purple-600 bg-transparent p-2 mt-4 mb-8 w-72 text-white"
				value={value}
				placeholder="Update Task"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-purple-600 text-white border-none py-2 px-3 rounded cursor-pointer'
			>
				Update Task
			</button>
		</form>
	);
};
