export const AppReducer = (state, action) => {
    switch(action.type) {
        case "DELETE_ITEM":
            return {
                ...state, 
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            }
        case "ADD_TRANSACTION":
            return {
                ...state,
                transactions: [action.payload, ...state.transactions]
            }
        default:
            return state;
    }
}