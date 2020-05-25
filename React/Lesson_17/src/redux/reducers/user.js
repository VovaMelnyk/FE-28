const initialState = {
  name: "Bob",
  country: { name: "Belgium", id: 23 },
  account: {
    id: 21,
    premium: false,
    status: "Active",
  },
};

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};
