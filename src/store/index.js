import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducer';

const initialStore = {
    count: 0
};

export default ({ children, initialState = initialStore }) => {
    const store = createStore(
      reducer,
      initialState
    );
    return <Provider store={store}>{children}</Provider>;
};
  
