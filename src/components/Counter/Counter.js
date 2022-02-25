import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    
    const [count, setCount] = useState(0)

    function set (){
        setCount(count + 1);
    }

    function dec (){
        setCount (count - 1)
    }

  return (
    
    <div className = "div">
        <h1>Desafio - Contador </h1>
        <button type="button" onClick={set}>Sumar</button>
        <p>{count}</p>
        <button type="button" onClick={dec}>Restar</button>
    </div>
  )
}

export default Counter