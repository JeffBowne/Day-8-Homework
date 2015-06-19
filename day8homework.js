// //----Here is an object literal

// var favoriteBass = {
// 	brand: "Fender",
// 	model: "Jazz Deluxe",
// 	color: "black",
// 	pickup: "active J's"
// } 


// //----Here is an object constructor function

// function Guitar(brand, model, color, pickup) {
// 	this.brand = brand;
// 	this.model = model;
// 	this.color = color;
// 	this.pickup = pickup;
// 	this.ownership = function() {
// 		return this.brand + " " + this.model + " is one of my guitars."
// 	}
// }
// //----Here is instances of the object 
// var mainGuitar = new Guitar("Schecter", "Ultra II", "gray", "Loudmouth");
// var backupGuitar = new Guitar("Schecter", "S-1 Custom", "tobacco burst", "Loudmouth");
// var alternateGuitar = new Guitar("Gibson", "Les Paul Studio", "black", "humbucker"); 
// var shitGuitar = new Guitar("Epiphone", "SG Jr.", "yellow", "P-90"); 

// //----prototype adding a method to the object
// Guitar.prototype.play = function() {
// 	return "I would like to play my " + this.brand + " " + this.model + "."
// }
// //---adding a method to each of the instances
// mainGuitar.opinion =  function() {
// 	return "I love this guitar."
// }
// backupGuitar.opinion = function() {
// 	return "I used to love this guitar, now it just feels too small."
// }
// alternateGuitar.opinion = function() {
// 	return "This is a classic and it's great for experiments."
// }
// shitGuitar.opinion = function() {
// 	return "I can smash this guitar."
// }
// //----prototype adding a new atrtribute to all the instances of the object 
// Guitar.prototype.radius=null;
// mainGuitar.radius=14;
// backupGuitar.radius=14;
// alternateGuitar.radius=12;
// shitGuitar.radius=12;

// //----------------------------------Multiplier 

// function Multiplier() {
// 	var currentValue = 1;

// 	this.multiply = function(newValue) {
// 		if (currentValue === 1) {
// 			currentValue = newValue * 1;
// 		} else {
// 			currentValue = currentValue * newValue;
// 		}
// 		return currentValue;
// 	};
// s
// 	this.getCurrentValue = function() {
// 		return "the current value is " + currentValue;
// 	};
// };
// var test = new Multiplier(6)
//--------------------------------------
// Create an object to represent a record player called Jukebox. 
// Create another object to represent a Record.

// The Jukebox should be able to tell you what Record is currently playing, and allow you to switch the currently playing record. 

// The currently playing Record returned should be an object that allows you to query for the title and artist of that record 
// as well as the title and artist combined together into one string


 function Album(artist, title) {
 	this.artist=artist;
 	this.title=title;
 }

var record1 = new Album("The Jesus Lizard", "Shot");
var record2 = new Album("Young Widows", "Easy Pain");
var record3 = new Album("Mos Def", "Black on Both Sides");
var record4 = new Album("Lauryn Hill", "The Misseducation of Lauryn Hill");

function Jukebox(albums) {
	this.albums = [record1, record2, record3, record4];
	this.counter = 0
	this.currentRecord = this.albums[this.counter];

	this.nextRecord = function() { 
		if (this.counter < this.albums.length - 1) {
			this.counter = this.counter + 1
		} else {
			this.counter = 0
		}	
		this.currentRecord = this.albums[this.counter];
	
		return "Skipping to next record: '" + this.currentRecord.title + "' by " + this.currentRecord.artist + ".";
	};

	// this.lastRecord = function() {
	// if (currentRecord == albums[0]) {
	// 		currentRecord = albums[3];
	// 	} else if (currentRecord == albums[3]) {
	// 		currentRecord = albums[2];
	// 	} else if (currentRecord == albums[2]) {
	// 		currentRecord = albums[1]; 
	// 	} else if (currentRecord == albums[1]) {
	// 		currentRecord = albums[0];
	// 	}
	// 	return "Skipping to last record: '" + currentRecord.title + "' by " + currentRecord.artist + ".";

	// };

	this.getCurrentRecord = function() {
		return "You are currently listening to '" + this.currentRecord.title + "' by " + this.currentRecord.artist + ".";
	};

};

var test = new Jukebox();
