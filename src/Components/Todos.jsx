import React, {useState} from 'react'

export default function Todos() {

    const [todos, setTodos] = useState([]); // Todoları buraya tutuyoruz
    const [task, setTask] = useState(("")); // inputtan gelen değerleri tutar.
    const [isEditing, setIsEditing] = useState(false) // Edit de olup olmadığımızı anlamak için
    const [currentIndex, setCurrentIndex] = useState(null); // Hangi görevi düzenlediğimizi takiğ ettiriyoruz.

    const addTodo = () => {

        if(task.trim("") === "") return;

        setTodos([...todos, task]);
        setTask("");

    }
    
    const editTodo = (index) => {
        setIsEditing(true)
        setTask(todos[index]);
        setCurrentIndex(index)
    }

    const updateTodo = () => {
        if(task.trim() === "") return;
        const updatedTodos = [...todos];
        updatedTodos[currentIndex] = task
        setTodos(updatedTodos)
        setTask("");
        setIsEditing(false);
        setCurrentIndex(null)
    }

    const deleteTodo = (indexToDelete) => {
        if (window.confirm("Bu görevi silmek istediğine emin misin?")){
            setTodos(todos.filter((_, index) => index != indexToDelete))
        }
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
                    onClick={isEditing ? updateTodo : addTodo}
                >{isEditing ? 'Update' : 'Add Todo'}</button>
            </div>
            <div>
                <ul className="flex flex-col gap-y-2">
                    {todos.map((todo,index) => (
                        <li key={index} className="flex gap-x-4">
                            {todo}

                            <button
                                className="hover:scale-125 transition-all"
                                onClick={() => editTodo(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"/>
                                </svg>

                            </button>
                            <button
                                className="text-red-600 hover:scale-125 transition-all"
                                onClick={() => deleteTodo(index)}
                            >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     stroke-width="2" stroke="currentColor" className="size-4">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                          d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"/>
                                </svg>
                            </button>


                        </li>

                    ))}
                </ul>
            </div>
        </div>
    )
}
