import React from 'react';

 


export const Context = React.createContext();
  
const Store1 = ({children}) => {
     const [state,setstate] = React.useState(false);

     return(
         <Context.Provider value={[state,setstate]}>{children}</Context.Provider>
     )
}

export default Store1;