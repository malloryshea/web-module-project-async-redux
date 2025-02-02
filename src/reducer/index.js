import { FETCH_START, FETCH_SUCCESS } from "../actions";

const initialState = {
  meal: {
    recipeName: "Shrimp Pasta",
    recipeImg: "https://images.unsplash.com/photo-1620088562941-9fe63515d85d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1480&q=80",
    recipeInst: "order olive garden delivery",
  },
  isFetching: false,
  errorMessage: "",
};

const reducer = (state = initialState, action) => {
    console.log(state)
  switch (action.type) {
    case (FETCH_START): 
    return({
        ...state,
        meal: {},
        isFetching: true,
        errorMessage: ''
    }) 
    case(FETCH_SUCCESS):
    return({
        ...state,
        meal: action.payload,
        isFetching: false
    })
    default:
      return state;
  }
};

export default reducer;

