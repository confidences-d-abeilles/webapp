
const SET = 'USER/SET';

export const setUser = (user) => ({
  type: SET,
  data: user,
});

export default {
  SET,
};
