import { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

// initial state

const initialState = {
  transactions: [
    // { id: 1, text: "Flower", amt: -20 },
    // { id: 2, text: "Salary", amt: 300 },
    // { id: 3, text: "Book", amt: -10 },
    // { id: 4, text: "Camera", amt: 150 },
  ],
  error: null,
  loading: true
};

// create context

export const GlobalContext = createContext(initialState);

// provider

// eslint-disable-next-line react/prop-types
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // actions

  async function getTransaction() {
    try {
      const res = await axios.get("/api/v1/transactions");

      dispatch({
        type: "GET_TRANSACTION",
        payload: res.data.data,
      });
    } catch (err) {
      dispatch({
        type: "DELETE_TRANSACTION",
        payload: err,
      })
    }
  }

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function AddTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        AddTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
