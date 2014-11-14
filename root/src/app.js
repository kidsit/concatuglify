var myModule = (function () {
	function sayHi (argument) {
		return "Hi, "+ argument + "!";
	}
	return {
		sayHi: sayHi
	};
}());
myModule.sayHi(); 