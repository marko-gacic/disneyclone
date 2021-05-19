import firebase from "firebase";

const firebaseConfig = {
	apiKey: "AIzaSyCtltJfk_bn_XT1aCrhIseQ-klb-b6v9iM",
	authDomain: "disney-project-copy.firebaseapp.com",
	projectId: "disney-project-copy",
	storageBucket: "disney-project-copy.appspot.com",
	messagingSenderId: "619503661865",
	appId: "1:619503661865:web:ff036128d54f28443afd38",
	measurementId: "G-DJW0Z7RP88",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };

export default db;
