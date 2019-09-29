import USER from './actions';

const initialState = null;

export default (state = initialState, { type, data }) => {
  switch (type) {
    case USER.SET:
      return {
        ...data,
        ...state,
      };
    default:
      return state;
  }
};
