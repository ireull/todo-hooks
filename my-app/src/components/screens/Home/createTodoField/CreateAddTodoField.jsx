import React, { useState } from 'react';

const CreateAddTodoField = ({ setTodos }) => {
    const [title, setTitle] = useState('');

    const addTodo = (title) => {
        setTodos((prev) => [
            {
                id: new Date(),
                title,
                isCompleted: false,
            },
            ...prev,
        ]);
        setTitle('');
    };
    return (
        <div className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 px-3 py-2 w-full border-2 mt-20 border-zinc-600">
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                onKeyPress={(e) => e.key === 'Enter' && addTodo(title)}
                className="bg-transparent w-full border-none outline-none"
                placeholder="Add task"
            />
        </div>
    );
};

export default CreateAddTodoField;
