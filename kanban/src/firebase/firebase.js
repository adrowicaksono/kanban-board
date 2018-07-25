var config = {
    apiKey: "AIzaSyAmaGxoU8IJ1GyoNdJFHcrN4dsqhijGtdc",
    authDomain: "kanbanawsome.firebaseapp.com",
    databaseURL: "https://kanbanawsome.firebaseio.com",
    storageBucket: "",
  };
  firebase.initializeApp(config);
  var db = firebase.database();
  
  export default db