export const increment = () => {
  return {
    type: 'INCREMENT',
  };
};

export const decrement = () => {
  return {
    type: 'DECREMENT',
  };
};

export const mulitply = (number) => {
  return {
    type: 'MULTIPLY',
    payload: number,
  };
};
