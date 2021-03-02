import firebase from "firebase/app";
import "firebase/database";
import "firebase/auth";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_FIREBASE_MEASUREMENT_ID,
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, googleAuthProvider, database as default };

// database.ref("expenses").on("child_changed", (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref("expenses")
//     .on("value", (snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                 id: childSnapshot.key,
//                 ...childSnapshot.val()
//             })
//         })
//         console.log(expenses);
//     })

// database.ref().on("value", (snapshot)  => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
// });

// database.ref("expenses")
//     .once("value")
//     .then((snapshot) => {
//         const expenses = [];
//         snapshot.forEach((childSnapshot) => {
//             expenses.push({
//                id: childSnapshot.key,
//                ...childSnapshot.val()
//             });
//         });
//         console.log(expenses);
//     }).catch((err) => {
//         console.log("oh no", err);
//     })

// database.ref("expenses").push({
//     description: "coffe",
//     note: "",
//     amount: 9,
//     createdAt: "2012"
// });

// database.ref("notes").push({
//     title: "course topics",
//     body: "firebase, redux"
// });

// database.ref().on("value", (snapshot)  => {
//     console.log(snapshot.val());
// });

// database.ref("location/city")
//     .once("value")
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     }).catch((err) => {
//         console.log("error fetching", err);
//     });
    

// database.ref().set({
//     name: "durmus",
//     age: 32,
//     stressLevel: 6,
//     job: {
//         title: "Web developer",
//         company: "Amazon"
//     },
//     location: {
//         city: "Ankara",
//         country: "TR"
//     }
// }).then(() => {
//     console.log("succes");
// }).catch((err) => {
//     console.log("failed:", err);
// });

// database.ref().update({
//     stressLevel: 3,
//     "job/company": "Google",
//     "location/city": "Berlin"
// });

// database.ref("isSingle")
// .remove()
// .then(() => {
//     console.log("removed");
// }).catch((err) => {
//     console.log("Ohh no", err);
// })

