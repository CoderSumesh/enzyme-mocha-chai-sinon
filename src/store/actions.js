export const INCREMENT_VALUE = 'INCREMENT_VALUE';
export const DECREMENT_VALUE = 'DECREMENT_VALUE';
export const RESET_VALUE = 'RESET_VALUE';

export const incrementValue = () => ({
  type: INCREMENT_VALUE,
});

export const decrementValue = () => ({
  type: DECREMENT_VALUE,
});

export const resetValue = () => ({
  type: RESET_VALUE,
});
