import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

interface TodoProps {
  task: {
    id: string;
    task: string;
    completed: boolean;
    isEditing: boolean;
  };
  toggleComplete: (id: string) => void;
  deleteTodo: (id: string) => void;
  editTodo: (id: string) => void;
}

export const Todo = ({ task, toggleComplete, deleteTodo, editTodo }: TodoProps): JSX.Element => {
  const { id, task: taskName, completed } = task;

  return (
    <div className='flex justify-between items-center bg-purple-600 text-white p-3 rounded-md mb-4 cursor-pointer'>
      <p
        className={`${completed ? 'completed' : ''}`}
        onClick={() => toggleComplete(id)}
      >
        {taskName}
      </p>
      <div>
        <FontAwesomeIcon icon={faPenToSquare as IconDefinition} onClick={() => editTodo(id)} />
        <FontAwesomeIcon icon={faTrash} onClick={() => deleteTodo(id)} />
      </div>
    </div>
  );
};
