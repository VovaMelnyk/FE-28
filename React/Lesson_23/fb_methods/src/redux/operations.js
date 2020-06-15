import { addItem, getItem, deleteItem } from "../redux/listSlice";
import { db } from "../config";

export const getDataFromFireStore = (dbName) => async (dispatch) => {
  try {
    const snapshot = await db.collection(dbName).get();
    const result = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
    dispatch(getItem(result));
  } catch (error) {
    console.log(error);
  }
};

export const writeDataToFirestore = (dbName, data) => async (dispatch) => {
  try {
    const result = await db.collection(dbName).add(data);
    dispatch(addItem({ ...data, id: result.id }));
  } catch (error) {
    console.log(error);
  }
};

export const deleteDataFromFireStore = (dbName, docId) => async (dispatch) => {
  try {
    await db.collection(dbName).doc(`${docId}`).delete();
    dispatch(deleteItem(docId));
  } catch (error) {
    console.log(error);
  }
};
