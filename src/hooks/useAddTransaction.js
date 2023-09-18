import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase-config";
import { useGetUserInfo } from "./useGetUserInfo";

export const useAddTransaction = () => {
  const transactionCollectionRef = collection(db, "transactions");
  const { userId } = useGetUserInfo();
  const addTransaction = async ({description, transactionAmount, transactionType}) => {
    if (userId) {
        await addDoc(transactionCollectionRef, {
            userId,
            description,
            transactionAmount,
            transactionType,
            createdAt: serverTimestamp()
        });
    } else {
        console.error("UserID is null or undefined");
    }
}

  return { addTransaction };
};