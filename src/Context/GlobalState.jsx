import React, { createContext, useReducer } from "react";
import { AppReducer } from "./AppReducer";

// Initial State
const initialState= {
    transactions: [
        // duplicate data that have the object like this
        // {id: 1, text: "flower", amount: 20}
    ]
}

// create Global Context

export const GlobalContext = createContext(initialState);

// create Global Provider

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // actions
    function deleteTransactions(id) {
        dispatch({
            type: "DELETE_ITEM",
            payload: id
        })
    }

    function addTransaction(transaction) {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: transaction
        })
    }

    return(
    <GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransactions,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}