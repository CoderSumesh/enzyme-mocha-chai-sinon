import * as actionTypes from './actions';

const reducer = (state = {}, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT_VALUE: {
      const { count } = state;
      return {
        ...state,
        count: count + 1,
      };
    }

    case actionTypes.DECREMENT_VALUE: {
        const { count } = state;
        return {
          ...state,
          count: count > 0 ? count - 1 : count,
        };
    }
    
    case actionTypes.RESET_VALUE: {
        return {
          ...state,
          count: 0,
        };
    }
    
    default: {
      return state;
    }
  }
};

export default reducer;
