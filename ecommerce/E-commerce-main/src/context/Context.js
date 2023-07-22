import { createContext, useReducer } from "react";

export const Cartcontext = createContext();

export const Context = (props) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD":
        const existingItem = state.find(item => item.id === action.payload.id);
        if (existingItem) {
          // If the item already exists in the cart, update the quantity
          return state.map(item =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // If the item does not exist in the cart, add it to the state
          return [...state, { ...action.payload, quantity: 1 }];
        }
      case "INCREASE":
        // Increase the quantity of the item
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      case "DECREASE":
        // Decrease the quantity of the item, remove if quantity reaches 0
        return state.map(item =>
          item.id === action.payload.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        ).filter(item => item.quantity > 0);
      case "REMOVE":
        // Remove the item from the cart by filtering it out
        return state.filter(item => item.id !== action.payload.id);
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, []);
  const info = { state, dispatch };

  return (
    <Cartcontext.Provider value={info}>
      {props.children}
    </Cartcontext.Provider>
  );
};
