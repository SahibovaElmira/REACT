import { useReducer, useState } from 'react';
import React from 'react';
const DECREMENET = "decrement";
const INCREMENT ="increment";
// INCREMENT and DECREMENT

function  reducer (state, action) {

  switch (action.type){
    case INCREMENT:
      return {
        counter:state.counter + action.payload,
      };
    case DECREMENET:
      return {
        counter:state.counter - action.payload,
      
      }
  }
    
  };


function App ()  {
  const [state, dispatch]= useReducer(reducer, 
    {
    counter:1,
  });
  
return(
  <div>
 <button onClick ={()=>dispatch({type:DECREMENET,
 payload:1

})
} >-1</button>
 <button onClick ={()=>dispatch({type:DECREMENET,
 payload:2

})
} >-2</button>

 <span>{state.counter}</span>
 <button onClick ={()=>dispatch({type:INCREMENT,
 payload:1

})
} >+1</button>

<button onClick ={()=>dispatch({type:INCREMENT,
 payload:2

})
} >+2</button>



  </div>
 
)
};
export default App


