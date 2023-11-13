import { useReducer, useState } from 'react'
import React from 'react'

function  reducer (state, action) {
  // console.log(state,action);
  // return {
  //   counter:1,}
  switch (action.type){
    case "increment":
      return {
        counter:state.counter + 1,
      
      }
  }
    
  };


function App ()  {
  const [state, dispatch]= useReducer(reducer, 
    {
    counter:1,
  });
  const handlerClick =()=> {dispatch(
    { 
    type:"increment",
     payload: 1,
});
};

return(
  <button onClick ={handlerClick} >Click "{state.counter}</button>
)
};
export default App


