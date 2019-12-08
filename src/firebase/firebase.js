import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyBRTKd9-AfB4zsFCT4GrT6mLCkCSH3E4fY",
  authDomain: "expensify-a8a42.firebaseapp.com",
  databaseURL: "https://expensify-a8a42.firebaseio.com",
  projectId: "expensify-a8a42",
  storageBucket: "expensify-a8a42.appspot.com",
  messagingSenderId: "500332629154",
  appId: "1:500332629154:web:7f9e56519bd4a0901c5bfb",
  measurementId: "G-VN8R23KQBT"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default };

// database.ref("expenses").on("child_removed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_changed", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database.ref("expenses").on("child_added", snapshot => {
//   console.log(snapshot.key, snapshot.val());
// });

// database
//   .ref("expenses")
//   .once("value")
//   .then(snapshot => {
//     const expenses = [];
//     snapshot.forEach(childSnapshot => {
//       expenses.push({
//         id: childSnapshot.key,
//         ...childSnapshot.val()
//       });
//     });
//     console.log(expenses);
//   });

// database
//   .ref("expenses")
//   .push({ description: "Rent", note: "", amount: 109500, createdAt: 97922523 });
// database
//   .ref("expenses")
//   .push({
//     description: "Phone bill",
//     note: "",
//     amount: 5900,
//     createdAt: 97922523
//   });
// database
//   .ref("expenses")
//   .push({ description: "Food", note: "", amount: 1200, createdAt: 97922523 });

// database
//   .ref()
//   .set({
//     name: "Andrew Mead",
//     isSingle: false,
//     age: 26,
//     stressLevel: 6,
//     job: {
//       title: "Software Developer",
//       company: "Google"
//     },
//     location: {
//       city: "London",
//       country: "United Kingdom"
//     }
//   })
//   .then(() => {
//     console.log("Data is saved");
//   })
//   .catch(e => {
//     console.log("This failed.", e);
//   });

// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Seattle",
//   "location/country": "United States"
// });

// database
//   .ref()
//   .once("value")
//   .then(snapshot => {
//     const val = snapshot.val();
//     console.log(val);
//   })
//   .catch(err => {
//     console.log(err);
//   });
