import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { decrement, increment ,incrementByAmount,incrementAsync} from '../redux/state/counter/counterSlice';

export default function Counter() {
    const count = useSelector((state) => state.counter.value)
    const dispatch = useDispatch();
    
 
  return (
    <div>
        <h2>Counter : {count}</h2>
        <div>
        <button onClick={()=>{dispatch(increment())}} style={{backgroundColor:"green",marginRight:"10px"}}>Increment</button>
        <button onClick={()=>{dispatch(decrement())}} style={{backgroundColor:"red"}}>Decrement</button>    
        <button onClick={()=>{dispatch(incrementByAmount(10))}} style={{backgroundColor:"green",marginLeft:"10px"}}>Increment By 10</button>
        <button onClick={()=>{dispatch(incrementAsync(10))}} style={{backgroundColor:"green",marginLeft:"10px"}}>Increment By Async</button>
        </div>        
    </div>
  )
}
