import { createContext, useReducer, useContext, ReactNode, Dispatch } from "react";

interface SelectedItems {
    id: number;
    name: string;
    price: number|string|any;
    quantity: number;
    image: string;
}

interface Props {
    children: ReactNode;
}

interface Cart {
    selectedItems: SelectedItems[];
    checkout: boolean;
    total: number;
}

const CartContext = createContext<Cart>(null!);
const SetCartContext = createContext<Dispatch<Action> | undefined>(undefined);

const initialState: Cart = {
    total: 0,
    checkout: false,
    selectedItems: [],
};

interface Action {
    type: "ADD" | "REMOVE" | "CHECKOUT";
    payload: {
        id: number;
        name: string;
        price: number|string|any;
        image: string;
    };
}

const reducer = (state: Cart, action: Action): Cart => {
    switch (action.type) {
        case "ADD": {
            const index = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            if (index === -1) {
                state.selectedItems.push({
                    id: action.payload.id,
                    name: action.payload.name,
                    price: +action.payload.price,
                    image: action.payload.image,
                    quantity: 1,
                });
                state.total += +action.payload.price;
            } else {
                state.selectedItems[index].quantity++;
                state.total += state.selectedItems[index].price;
            }
            return {
                ...state,
            };
        }
        case "REMOVE": {
            const index = state.selectedItems.findIndex((item) => item.id === action.payload.id);
            if (index === -1) return state;
            if (state.selectedItems[index].quantity === 1) {
                state.total -= +state.selectedItems[index].price;
                state.selectedItems.splice(index, 1);
            } else {
                state.total -= +state.selectedItems[index].price;
                state.selectedItems[index].quantity--;
            }
            return {
                ...state,
            };
        }
        case "CHECKOUT": {
            return {
                ...state,
                checkout: true,
                selectedItems: [],
            };
        }
        default:
            return state;
    }
};

const CartContextProvider = ({ children }: Props) => {
    const [cart, dispatch] = useReducer(reducer, initialState);
    return (
        <CartContext.Provider value={cart}>
            <SetCartContext.Provider value={dispatch}>{children}</SetCartContext.Provider>
        </CartContext.Provider>
    );
};

const useCart = () => useContext(CartContext);

const useSetCart = () => {
    const context = useContext(SetCartContext);
    if (!context) {
        throw new Error("useSetCart must be used within a CartContextProvider");
    }
    return context;
};

export default CartContextProvider;
export { useCart, useSetCart };
