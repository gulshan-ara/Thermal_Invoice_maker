import { getFirebaseApp } from "./firebaseHelper";
import { child, get, getDatabase, ref, remove, set } from "firebase/database";

export const saveInvoice = async (invoiceId, invoiceData) => {
	const app = getFirebaseApp();
	const dbRef = ref(getDatabase(app));
	const invoiceRef = child(dbRef, `invoices/${invoiceId}`);

	await set(invoiceRef, invoiceData);
	return invoiceData;
};

export const getInvoices = async () => {
	try {
		const app = getFirebaseApp();
		const dbRef = ref(getDatabase(app));
		const invoiceRef = child(dbRef, `invoices`);

    const snapshot = await get(invoiceRef);
    // console.log(snapshot.val());
    return snapshot.val();
	} catch (error) {
    console.log(error);
  }
};

export const deleteInvoice = async (invoiceId) => {
	try {
		const app = getFirebaseApp();
		const dbRef = ref(getDatabase(app));
		const invoiceRef = child(dbRef, `invoices/${invoiceId}`);

    await remove(invoiceRef);
	} catch (error) {
    console.log(error);
  }
}
