import React, {useState} from 'react'

export default function Todos() {

    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState((""));

    const addTodo = () => {

        if(task.trim("") === "") return;

        setTodos([...todos, task]);
        setTask("");

    }

    return (
        <div className="flex flex-col gap-4 h-screen justify-center items-center">
            <h2 className="font-bold text-3xl">Todo Application</h2>
            <div className="flex gap-x-4 items-center">
                <input
                    type="text"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    className="bg-transparent text-lg font-semibold border border-[#282828] w-80 py-0.5 rounded px-2 text-gray-100 outline-none"
                    placeholder="Add Todo"
                />
                <button
                    className="border w-36 py-1 border-[#282828] rounded font-semibold"
                    onClick={addTodo}
                >Add Todo</button>
            </div>
            <div>
                <ul>
                    {todos.map((todo,index) => (
                        <li key={index}>{todo}</li>
                    ))}
                </ul>
            </div>
        </div>
    )
}
