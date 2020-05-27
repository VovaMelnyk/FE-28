import { TOKEN_SET } from "../types";

export const tokenSet = (token) => ({
  type: TOKEN_SET,
  payload: token,
});
