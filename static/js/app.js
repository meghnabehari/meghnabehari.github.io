
(function () {
	
	// Initialize Firebase 
	const firebaseConfig = {
	  apiKey: "AIzaSyB5xXHwOGGx4ovnmKjww0IiNvmWrgrJ1UU",
	  authDomain: "tensile-ship-248720.firebaseapp.com",
	  databaseURL: "https://tensile-ship-248720.firebaseio.com",
	  projectId: "tensile-ship-248720",
	  storageBucket: "tensile-ship-248720.appspot.com",
	  messagingSenderId: "904505678249",
	  appId: "1:904505678249:web:3613379e044d4411550cb8",
	  measurementId: "G-NJH93HDVHV"
	};
	
	firebase.initializeApp(firebaseConfig); 
	
	const preObject = document.getElementById('object'); 
		
	//create database references 
	const dbRef = firebase.database().ref().child('locations');
	 
	
	// Sync object changes 
	dbRef.on('value', function(snapshot) {
		snapshot.forEach(function(childSnapshot) {
			var childData = childSnapshot.val(); 
			console.log(childData); 
			
		});
	}); 
	
	dbRef.update ({
		l4: {
			Latitude: 1,
			Longitude: 2
		}, 
		
		l5: {
			Latitude: 4, 
			Longitude: 5
		}, 
		
		l6: {
			Latitude: 9,
			Longitude: 10
		}
		
	}); 
	
	
}()); 