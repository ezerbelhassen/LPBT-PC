var firebaseConfig = {
    apiKey: "AIzaSyCtT0thEkML4qHzO34QkdAUcRZP7UvLGrw",
    authDomain: "lpbtpressclub-5f948.firebaseapp.com",
    databaseURL: "https://lpbtpressclub-5f948.firebaseio.com",
    projectId: "lpbtpressclub-5f948",
    storageBucket: "lpbtpressclub-5f948.appspot.com",
    messagingSenderId: "884379343766",
    appId: "1:884379343766:web:fab6392ebc241227"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);


var messagesRef = firebase.database().ref();



document.getElementById('feedbackForm').addEventListener('submit', submitForm);

function submitForm(e){
    e.preventDefault();


    var name = getInputVal('name');
    var email = getInputVal('email');
    var message = getInputVal('message');

    saveMessage(name, email, message);
    document.querySelector('#alert').style.display = "block"
    setTimeout(function(){
        document.querySelector('#alert').style.display = 'none';
    },3000)
}

function getInputVal(id){
    return document.getElementById(id).value;
}

function saveMessage(name, email, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    });
}
