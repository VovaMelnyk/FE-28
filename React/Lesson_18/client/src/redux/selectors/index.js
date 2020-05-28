export const userSelector = (state) => state.user;

export const isAuth = (state) => !!userSelector(state);