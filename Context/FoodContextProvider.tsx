import { createContext, useReducer, useContext, ReactNode } from "react";

interface SelectedItems {
    id: number
    name: string
    price: number
    quantity: number
}

interface Props {
    children: ReactNode
}

interface Cart {
    selectedItems: SelectedItems[]
    checkout: boolean
    total: number
}

const CartContext = createContext({} as Cart)
const SetCartContext = createContext({})

const initialState = {
    total: 0,
    checkout: false,
    selectedItems: []

}
interface Action {
    type: "ADD" | "REMOVE" | "CHECKOUT",
    payload: {
        id: number,
        name: string,
        price: number,
        quantity:number,
    }
}

const reducer = (state: Cart, action: Action) => {
    switch (action.type) {
        case "ADD": {
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            if (index === -1) {
                state.selectedItems.push({ id: action.payload.id, name: action.payload.name, price: action.payload.price, quantity: action.payload.quantity })
                state.total += action.payload.price;
            }
            else {
                state.selectedItems[index].quantity++;
                state.total += state.selectedItems[index].price;
            }
            return {
                ...state
            }
        }
        case "REMOVE": {
            const index = state.selectedItems.findIndex(item => item.id === action.payload.id)
            if (index === -1)
                return state;
            else if (state.selectedItems[index].quantity === 1) {
                state.total -= state.selectedItems[index].price;
                state.selectedItems.splice(index, 1);
            }
            else {
                state.total -= state.selectedItems[index].price;
                state.selectedItems[index].quantity--;
            }
            return {
                ...state
            }
        }
        case "CHECKOUT": {
            state.checkout = true;
            return {
                ...state
            }
        }

        default: return state
    }
}

const CartContextProvider = ({ children }: Props) => {
    const [cart, dispatch] = useReducer(reducer, initialState);
    return <CartContext.Provider value={cart}>
        <SetCartContext.Provider value={dispatch}>
            {children}
        </SetCartContext.Provider>
    </CartContext.Provider>
}

const useCart = () => {
    return useContext(CartContext)
}

const useSetCart = () => {
    return useContext(SetCartContext)
}

export default CartContextProvider

export { useCart, useSetCart }

