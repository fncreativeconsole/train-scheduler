// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD5PAoYzLN5wuGrWhEBVKBwJ5D4EH2M1kE",
    authDomain: "train-scheduler-school-project.firebaseapp.com",
    databaseURL: "https://train-scheduler-school-project.firebaseio.com",
    projectId: "train-scheduler-school-project",
    storageBucket: "",
    messagingSenderId: "504558119552"
  };
  firebase.initializeApp(config);

  var database = firebase.database();

  //When someone fills out the form, add the data into firebase
  $("#add-train-button").on("click", function(event) {
  	event.preventDefault();

  	var newTrain = {
  		name: $("#train-name-input").val().trim(),
  		destination: $("#destination-input").val().trim(),
  		first: $("#first-train-input").val().trim(),
  		frequency: $("#frequency-input").val().trim()
  	};

  	database.ref().push(newTrain);
	
	//clears all the fields	
	$("#train-name-input").val("");
  	$("#destination-input").val("");
  	$("#first-train-input").val("");
  	$("#frequency-input").val("");
  });

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  	var trainName = childSnapshot.val().name;
  	var trainDestination = childSnapshot.val().destination;
  	var firstTrain = childSnapshot.val().first;
  	var frequency = childSnapshot.val().frequency;

  	var nextArrival = moment(); 
  	var minutesAway = moment();

  	$("#train-schedule-table > tbody").append("<tr><td>" + trainName + "</td><td>" + trainDestination + "</td><td>" +
  firstTrain + "</td><td>" + nextArrival + "</td><td>" + minutesAway + "</td></tr>");
  
  });














