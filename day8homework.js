//----Here is an object literal

var favoriteBass = {
	brand: "Fender",
	model: "Jazz Deluxe",
	color: "black",
	pickup: "active J's"
} 


//----Here is an object constructor function

function Guitar(brand, model, color, pickup) {
	this.brand = brand;
	this.model = model;
	this.color = color;
	this.pickup = pickup;
	this.ownership = function() {
		return this.brand + " " + this.model + " is one of my guitars."
	}
}
//----Here is instances of the object 
var mainGuitar = new Guitar("Schecter", "Ultra II", "gray", "Loudmouth");
var backupGuitar = new Guitar("Schecter", "S-1 Custom", "tobacco burst", "Loudmouth");
var alternateGuitar = new Guitar("Gibson", "Les Paul Studio", "black", "humbucker"); 
var shitGuitar = new Guitar("Epiphone", "SG Jr.", "yellow", "P-90"); 

//----prototype adding a method to the object
Guitar.prototype.play = function() {
	return "I would like to play my " + this.brand + " " + this.model + "."
}
//---adding a method to each of the instances
mainGuitar.opinion =  function() {
	return "I love this guitar."
}
backupGuitar.opinion = function() {
	return "I used to love this guitar, now it just feels too small."
}
alternateGuitar.opinion = function() {
	return "This is a classic and it's great for experiments."
}
shitGuitar.opinion = function() {
	return "I can smash this guitar."
}
//----prototype adding a new atrtribute to all the instances of the object 
Guitar.prototype.radius=null;
mainGuitar.radius=14;
backupGuitar.radius=14;
alternateGuitar.radius=12;
shitGuitar.radius=12;

//----------------------------------Multiplier 

function Multiplier() {
	var currentValue = 1;

	this.multiply = function(newValue) {
		if (currentValue === 1) {
			currentValue = newValue * 1;
		} else {
			currentValue = currentValue * newValue;
		}
		return currentValue;
	};

	this.getCurrentValue = function() {
		return "the current value is " + currentValue;
	};
};
var myMulti = new Multiplier(6)
//--------------------------------------





