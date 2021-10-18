var firebaseConfig = {
    apiKey: "AIzaSyB1Pt1Ekj67SYbtWpwUv9hUi1sVh5odTv4",
    authDomain: "chat-app-dd19f.firebaseapp.com",
    databaseURL: "https://chat-app-dd19f-default-rtdb.firebaseio.com",
    projectId: "chat-app-dd19f",
    storageBucket: "chat-app-dd19f.appspot.com",
    messagingSenderId: "927856726751",
    appId: "1:927856726751:web:f6a48da6538cc1aefecf6a",
    measurementId: "G-ZEB6DNK37B"
  };
  
  firebase.intializeApp(firebaseConfig);

  function addUser(){
      username=document.getElementById("username").value ;

    firebase.database().ref("/").child(username).update({
        purpose: "adding username"
    });
  }