// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export const getFirebaseApp = () => {
	// Your web app's Firebase configuration
	const firebaseConfig = {
		apiKey: "AIzaSyCbT3H15EOJOVKNKShE2X5XlHZiz3F8sjs",
		authDomain: "invoicer-9eaf3.firebaseapp.com",
		projectId: "invoicer-9eaf3",
		storageBucket: "invoicer-9eaf3.appspot.com",
		messagingSenderId: "852110906532",
		appId: "1:852110906532:web:e71a7ba60e733a69c60231",
	};

	// Initialize Firebase
	const app = initializeApp(firebaseConfig);
	return app;
};
