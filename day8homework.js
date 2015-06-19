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






// DOESN'T WORK
// var person = {
// 	fname: "Jeff",
// 	lname: "Bowne",
// 	height: "6foot5",
// 	hair: "brown",
// 	myStats: function() {

// 	    for (i=0; i < person.length; i++) { 
// 		return person[i];
// 		}
// 	}
// }
// DOESN'T WORK




// var getKeys = function(obj){
// 		var keys = [];
// 	for(var key in obj){
// 	keys.push(key);
// 	}
// 	return keys;
// }



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


// //--------------------------------------Juke Box

//  function Album(artist, title) {
//  	this.artist=artist;
//  	this.title=title;
//  }

// function Jukebox(albums) {
// 	this.albums = [];
// 	this.counter = 0
// 	this.currentRecord = this.albums[this.counter];

	
// 	this.albums.push(new Album('The Jesus Lizard', 'Shot'))
// 	this.albums.push(new Album('Young Widows', 'Easy Pain'))
// 	this.albums.push(new Album("Mos Def", "Black on Both Sides"))
// 	this.albums.push(new Album("Lauryn Hill", "The Misseducation of Lauryn Hill"))
// 	this.albums.push(new Album('Fight Amp', 'Constantly Off'))
// 	this.albums.push(new Album('Faking', 'Godddamn Cowards'))
// 	this.albums.push(new Album('Black Flag', 'Damaged'))
// 	this.albums.push(new Album('Minor Threat', 'Out Of Step'))
// 	this.albums.push(new Album('Botch', 'We Are The Romans'))
// 	this.albums.push(new Album('Coalesce', 'Functoning on Impatience'))
// 	this.albums.push(new Album('Converge', 'You Fail Me'))

// 	this.nextRecord = function() { 
// 		if (this.counter < this.albums.length - 1) {
// 			this.counter = this.counter + 1
// 		} else {
// 			this.counter = 0
// 		};	
// 		this.currentRecord = this.albums[this.counter];	
// 		return "Skipping to next record: '" + this.currentRecord.title + "' by " + this.currentRecord.artist + ".";
// 	};

// 	this.lastRecord = function() {
// 		if (this.counter == 0) {
// 			this.counter = this.albums.length - 1
// 		} else {
// 			this.counter = this.counter - 1
// 		};
// 		this.currentRecord = this.albums[this.counter];
// 		return "Skipping to last record: '" + this.currentRecord.title + "' by " + this.currentRecord.artist + ".";
// 	};

// 	this.getCurrentRecord = function() {
// 		return "You are currently listening to '" + this.currentRecord.title + "' by " + this.currentRecord.artist + ".";
// 	};
// };

// var play = new Jukebox();


// //---------------------------Photo Album 

//  function Photo(file, taken) {
//  	this.file=file;
//  	this.taken=taken;
//  }

// function photoAlbum(photos) {
// 	this.photos = [];
	
// 	this.photos.push(new Photo('photo01.jpg', 'West Philly'))
// 	this.photos.push(new Photo('photo02.jpg', 'Grand Canyon'))
// 	this.photos.push(new Photo('photo03.jpg', 'China'))
// 	this.photos.push(new Photo('photo04.jpg', 'Harvard'))
// 	this.photos.push(new Photo('photo05.jpg', 'Dive Bar'))
// 	this.photos.push(new Photo('photo06.jpg', 'County Prison'))

// 	this.addNew = function(name, place) {
// 		this.photos.push(new Photo(name, place));
// 	}
// };

// var view = new photoAlbum();


// //---------------------------------Person prototype

// function Person(fname, lname) {
// 	this.fname=fname;
// 	this.lname=lname;
// 	this.name = function() {
// 		return this.fname + " " + this.lname;
// 	}
// }

// function Teacher() {
// 	Person.apply(this, arguments);
// 	this.classname=arguments[2];
// 	this.tenure=arguments[3];
// }

// function Student() {
// 	Person.apply(this, arguments);
// 	this.historygrade=arguments[2];
// 	this.mathgrade=arguments[3];
// 	this.englishgrade=arguments[4];
// }

// var	coleson = new Teacher('Mitchell', 'Coleson', 'History Teacher', '8 Years');
// var	swanson = new Teacher('Debra', 'Swanson', 'Math Teacher', '2 Years');
// var	danzig = new Teacher('Glenn', 'Danzig', 'English Teacher', '666 Years');

// var sam = new Student('Samantha', 'Gill', 'History: A', 'Math: D', 'English A');
// var timmy = new Student('Timothy', 'Beckett', 'History: B', 'Math: C', 'English A');
// var billy = new Student('William', 'Madison', 'History: D', 'Math: F', 'English D');
// var jimmy = new Student('James', 'McQueen', 'History: A', 'Math: A', 'English B');
// var sarah = new Student('Sarah', 'Millinghausen', 'History: B', 'Math: A', 'English A');
// var jenny = new Student('Jennifer', 'Riet', 'History: D', 'Math: D', 'English A');


