import React, {useState} from 'react'
import './Counter.css'

const Counter = () => {
    
    const [count, setCount] = useState(1)
    const stock = 5;

    function set (){
      if(count > 0  && count<stock){
        setCount(count + 1);
      } else {
        console.log("Stock agotado")
      }
        
    }

    function dec (){
      if (count > 1 ){
        setCount (count - 1)
      } else {
        console.log ("El stock minimo es 1")
      }
        
    }

  return (
    
    <div className = "div">
        <h1>Usted hizo {count} clicks</h1>
        <button type="button" onClick={set}>Sumar</button>
        <button type="button" onClick={dec}>Restar</button>
    </div>
  )
}

export default Counter