
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyAz0YkcOIPAySQHueCNWp1h56FdzPQNo8E",
    authDomain: "carniceria-web-ebb84.firebaseapp.com",
    projectId: "carniceria-web-ebb84",
    storageBucket: "carniceria-web-ebb84.firebasestorage.app",
    messagingSenderId: "965185416757",
    appId: "1:965185416757:web:8e0242ae27c8fcac3e4b7c",
    measurementId: "G-NCTRXY7L6M"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function check() {
    const qS = await getDocs(collection(db, "productos"));
    if (qS.empty) {
        console.log("FIRESTORE_STATUS: EMPTY");
    } else {
        console.log("FIRESTORE_STATUS: HAS_DATA");
        qS.forEach(doc => console.log(`PRODUCT: ${doc.id} - PRICE: ${doc.data().price}`));
    }
}

check();
