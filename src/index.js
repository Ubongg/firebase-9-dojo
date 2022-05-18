import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBO-HCFOXUNrET9Q0GMLHaC3HuxHFOwUPs",
  authDomain: "fir-9-dojo-23c66.firebaseapp.com",
  projectId: "fir-9-dojo-23c66",
  storageBucket: "fir-9-dojo-23c66.appspot.com",
  messagingSenderId: "257530184713",
  appId: "1:257530184713:web:09aab1215687e6151fe4d8",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
const colRef = collection(db, "books");

// get collection data
getDocs(colRef)
  .then((snapshot) => {
    let books = [];
    snapshot.docs.forEach((doc) => {
      books.push({ ...doc.data(), id: doc.id });
    });
    console.log(books);
  })
  .catch((err) => {
    console.log(err.message);
  });
