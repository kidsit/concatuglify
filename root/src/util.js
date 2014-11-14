var myModule2 = (function () {
	function sayHi (argument) {
		return "Hi, "+ argument + "!";
	}
	return {
		sayHi: sayHi
	};
}());
myModule2.sayHi();