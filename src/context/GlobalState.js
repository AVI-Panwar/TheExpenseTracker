import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//IntialState

const initialState = {
    transactions:[
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 } 
 ]
}

//createContext
export const GlobalContext = createContext(initialState)

//Provider Component
export const GlobalProvider =( {children}) => {
   const [state , dispatch]= useReducer(AppReducer, initialState)
   
   function deleteTransaction(id){
    dispatch({
      type : 'DELETE_TRANSACTION',
      payload : id
    }
    );
   }

   function addTransaction(Transaction){
    dispatch({
      type: 'ADD_TRANSACTION',
      payload :Transaction
    });
   }

   return (<GlobalContext.Provider value={ {
     transactions :state.transactions,
     deleteTransaction,
     addTransaction
   }}>
     {children}
   </GlobalContext.Provider>
   )
}


