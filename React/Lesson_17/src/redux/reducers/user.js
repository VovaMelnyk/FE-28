const initialState = {
  name: "Bob",
  country: { id: 23, string: { name: "Belgium" } },
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
