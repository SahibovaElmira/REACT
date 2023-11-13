import { useReducer, useState } from 'react';
import React from 'react';
import reducer from './reducer';
import { increment,decrement } from './actions';




function App ()  {
  const [state, dispatch]= useReducer(reducer, 
    {
    counter:1,
  });
  
return(
  <div>
 <button onClick ={()=>dispatch(decrement(1))} >-1</button>
 <button onClick ={()=>dispatch(decrement(2))} >-2</button>

 <span>{state.counter}</span>
 <button onClick ={()=>dispatch(increment(1))} >+1</button>

<button onClick ={()=>dispatch(increment(2))} >+2</button>



  </div>
 
)
};
export default App


