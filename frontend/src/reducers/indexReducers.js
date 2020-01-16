import indexActionsTypes from "../constants/indexActionsTypes";

const types = indexActionsTypes;

const initialState = {
  visitedPages : [],
  isLoading: true,
};

const indexReducer = (state=initialState, action) => {
  switch(action.type) {

    case types.FETCH_VISITED_PAGES:
      return {...state, visitedPages: [...action.visitedPages], isLoading: false}

    default:
      return state
  }
};

export default indexReducer;