 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyAIb2s_u2rFaXUv5Ow8EHspFPmNDm7j_TM",
    authDomain: "contactform-89982.firebaseapp.com",
    databaseURL: "https://contactform-89982.firebaseio.com",
    projectId: "contactform-89982",
    storageBucket: "",
    messagingSenderId: "186799904097"
  };
  firebase.initializeApp(config);

  // Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contactForm').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
    e.preventDefault();

    // Get values
  var name = getInputVal('name');
  var company = getInputVal('company');
  var email = getInputVal('email');
  var phone = getInputVal('phone');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, company, email, phone, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contactForm').reset();
}

// Function to get get form values
function getInputVal(id){
    return document.getElementById(id).value;
  }

  // Save message to firebase
function saveMessage(name, company, email, phone, message){
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
      name: name,
      company:company,
      email:email,
      phone:phone,
      message:message
    });
  }
  