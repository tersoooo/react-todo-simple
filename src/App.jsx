import { useState } from 'react'
import Todos from "./Components/Todos.jsx";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todos />
    </div>
  )
}

export default App
