import { INCREMENT,DECREMENET } from "./boilerplate";

export const increment =(payload)=>{
    return { 
      type:INCREMENT,
      payload,
      
    };
  };
 export const decrement =(payload)=>{
    return { 
      type:DECREMENET,
      payload,
      
    };
   
  };
  