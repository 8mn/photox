// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
	apiKey: "AIzaSyAI6KQVErZMubpWMAPi_SVgAzeXppoqqno",
	authDomain: "photox-5ffe8.firebaseapp.com",
	projectId: "photox-5ffe8",
	storageBucket: "photox-5ffe8.appspot.com",
	messagingSenderId: "1061858686907",
	appId: "1:1061858686907:web:5d7feef55dc4f79d5cb69e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const storage = getStorage(app);

export default storage