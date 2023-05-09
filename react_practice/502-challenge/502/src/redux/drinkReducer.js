const initialState = {
  drinkData: [
      { id: 1, drinkName: "Coca-Cola", quantity: 10 },
      { id: 2, drinkName: "Orange juice", quantity: 5 },
      { id: 3, drinkName: "Milk tea", quantity: 2 },
      { id: 4, drinkName: "Coffe", quantity: 8 },
      { id: 5, drinkName: "Beer", quantity: 6 },
  ],
}

export const drinkReducer = (state = initialState, action) => {
  switch (action.type) {
      case "UPDATE_DRINK_QUANTITY":
          const newDrinkState = state.drinkData.map(drink => {
              return drink.id !== action.payload.id
              ? drink
              : action.payload.operator === "+"
              ? { ...drink, quantity: drink.quantity + 1 }
              : { ...drink, quantity: drink.quantity - 1 }
          })

          return {
              ...state,
              drinkData: newDrinkState
          }

      default:
          return state
  }
}