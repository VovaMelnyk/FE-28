export const userSelector = (state) => state.user;

export const isAuthSelector = (state) => !!userSelector(state);
