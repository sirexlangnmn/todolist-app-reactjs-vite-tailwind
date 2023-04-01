import React, { useState } from 'react';

interface Props {
	addTodo: (todo: string) => void;
}

export const TodoForm: React.FC<Props> = ({ addTodo }) => {
	const [value, setValue] = useState("");

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		addTodo(value);
		setValue("");
	}

	return (
		<form className="w-full" onSubmit={handleSubmit}>
			<input
				type="text"
				className="outline-none border-2 border-purple-600 bg-transparent p-2 mt-4 mb-8 w-72 text-white"
				value={value}
				placeholder="What is the task today?"
				onChange={(e) => setValue(e.target.value)}
			/>
			<button
				type='submit'
				className='bg-purple-600 text-white border-none py-2 px-3 rounded cursor-pointer'
			>
				Add Task
			</button>
		</form>
	);
};
