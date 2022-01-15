import React, { useState } from 'react';
import CreateAddTodoField from './createTodoField/CreateAddTodoField';
import TodoItem from './Item/TodoItem';

const data = [
    {
        id: 1,
        title: 'Some work with CSS',
        isCompleted: false,
    },
    {
        id: 2,
        title: 'Some work with React',
        isCompleted: false,
    },
    {
        id: 3,
        title: 'Some work with JavaScript',
        isCompleted: false,
    },
];

const Home = () => {
    const [todos, setTodos] = useState(data);

    const handleToggle = (id) => {
        const copy = [...todos];
        const current = copy.find((todo) => todo.id === id);
        current.isCompleted = !current.isCompleted;
        setTodos(copy);
    };

    const removeTodo = (id) => {
        setTodos([...todos].filter((t) => t.id !== id));
    };

    console.log(todos);
    return (
        <div className="text-white w-4/5 mx-auto">
            <h1 className="font-bold text-2x1 text-center mb-8">
                What i gonna do?
            </h1>
            {todos.map((todo) => (
                <TodoItem
                    todo={todo}
                    key={todo.id}
                    handleToggle={handleToggle}
                    removeTodo={removeTodo}
                />
            ))}
            <CreateAddTodoField setTodos={setTodos} />
        </div>
    );
};

export default Home;
