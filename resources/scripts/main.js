/* Main JS thread */

// Global variables
var auth, db, stg;

window.onload = function () {

	// Initialize Firebase services
	firebase.initializeApp({
		apiKey: "AIzaSyAuDG4qigBRE3pzm8Kmp2ioNF310KZjtaE",
		authDomain: "iux-demo.firebaseapp.com",
		databaseURL: "https://iux-demo.firebaseio.com",
		projectId: "iux-demo",
		storageBucket: "iux-demo.appspot.com",
		messagingSenderId: "817758067949",
		appId: "1:817758067949:web:fefb516dba383a3ac440e4"
	});

	// Initialize Firebase variables
	auth = firebase.auth();
	db = firebase.firestore();
	stg = firebase.storage();

	// Set Firebase auth language
	auth.languageCode = 'en-IN';

	//Handle UI animations
	$('#starty').click(function () {
		$('html').addClass('fillBackground1');
		$('#starty').fadeOut(500);
		setTimeout(function () { $('#welcomey').fadeIn(750); }, 800);
		setTimeout(function () {
			$('#welcomey').fadeOut(500);
			setTimeout(function () {
				$('#welcomey').fadeIn(750);
				$('#welcomey').html('I\'m text!');
				$('#welcomey').css('margin-top', '30%');
				$('#welcomey').addClass('right-align');
				$('html').removeClass('fillBackground1');
				$('html').addClass('fillBackground2');
			}, 800);
		}, 2500);
	});

	$('#welcomey').click(function () {
		$('#welcomey').fadeOut(500);
		setTimeout(function () { $('html').removeClass('fillBackground2'); $('html').addClass('fillBackground3'); }, 800);
		setTimeout(function () {
			$('html').removeClass('fillBackground3');
			$('#starty').fadeIn(500);
			$('#welcomey').html('Hello, world!');
			$('#welcomey').css('margin-top', '15%');
			$('#welcomey').removeClass('right-align');
		}, 2000);
	});

}