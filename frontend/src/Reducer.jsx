export const initialState = {
    basket: [],
    user: null,
};

const reducer = (state, action) => {

    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
      case "Remove_From_Basket":
        const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id 
        );
        let newBasket = [...state.basket];
        
        if (index >=0) {
            newBasket.splice(index, 1);
        } else {
            console.warn(`Can't remove product (id: ${action.id} as its not in basket!)`
            );
        }
        return {
            ...state, basket: newBasket
        };
        case 'SET_USER':
          return {
            ...state, 
            user: action.user
          };

          default:
            return state;
    };
}

export default reducer

// const addProductExists = state.products.find(
//         (product) => product.id === action.payload.id
//       );
//       if (addProductExists) {
//         addProductExists.quantity += parseInt(action.payload.quantity);
//       } else {
//         state.products.push({
//           ...action.payload,
//           quantity: parseInt(action.payload.quantity),
//         });
//       }
//       state.productNumber =
//         state.productNumber + parseInt(action.payload.quantity);
//     }