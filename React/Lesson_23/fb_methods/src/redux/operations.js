import { setUserAction } from "./userSlice";
import { auth, db } from "../config";
import { addItem, getItems, deleteItem } from "./listSlice";

export const registerUser = (user) => async (dispatch) => {
  const { email, password } = user;
  try {
    const result = await auth.createUserWithEmailAndPassword(email, password);
    const authUser = { email: result.user.email };
    dispatch(setUserAction(authUser));
  } catch (error) {
    console.log("registerError", error);
  }
};

export const loginUser = (user) => async (dispatch) => {
  const { email, password } = user;
  try {
    const result = await auth.signInWithEmailAndPassword(email, password);
    const authUser = { email: result.user.email };
    dispatch(setUserAction(authUser));
  } catch (error) {
    console.log("loginError", error);
  }
};

export const writeDataToFireStore = (dbName, data) => async (dispatch) => {
  try {
    const result = await db.collection(dbName).add(data);
    const item = { ...data, id: result.id };
    dispatch(addItem(item));
  } catch (error) {
    console.log("add item error", error);
  }
};

export const readDataFromFireStore = (dbName) => async (dispatch) => {
  try {
    const result = await db.collection(dbName).get();
    const formatResult = result.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));
    dispatch(getItems(formatResult));
  } catch (error) {
    console.log("read data error", error);
  }
};

export const deleteDataFromFireStore = (dbName, docId) => async (dispatch) => {
  try {
    await db.collection(dbName).doc(docId).delete();
    dispatch(deleteItem(docId));
  } catch (error) {
    console.log("delete item error", error);
  }
};
