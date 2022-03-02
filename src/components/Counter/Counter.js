import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    
    const [count, setCount] = useState(1)
    const stock = 10;

    function set (){
      if(count > 0  && count<stock){
        setCount(count + 1);
      } 
        
    }

    function dec (){
      if (count > 1 ){
        setCount (count - 1)
      } 
        
    }

  return (
    
    <div className = "div">
        <h1>Usted seleccionó {count} elementos y el Stock total es de {stock} unidades </h1>
        <button type="button" onClick={set}>+</button>
        <button disabled={count===0} type="button" onClick={dec}>-</button>
    </div>
  )
}

export default Counter