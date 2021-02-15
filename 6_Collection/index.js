module.exports = Collection;

/**
 * Конструктор коллекции
 * @constructor
 */
function Collection() {
	this.body = [];
}

// Методы коллекции
Collection.prototype.values = function () { //DONE
	return this.body;
};
// другие методы
Collection.prototype.append = function () { //DONE
	var body = this.body;
	var arg;
	if (arguments[0].constructor.name == 'Collection') {
		arg = arguments[0].body
	} else {arg = arguments[0]}
	this.body = body.concat(arg);
};

Collection.prototype.at = function (k) { //DONE
	var element;
	if ( (k <= this.body.length) & (k > 0)) {
		element = this.body[k-1]}
		else {element = null}
	return element
};

Collection.prototype.count = function () { //DONE
	return this.body.length;
};

Collection.prototype.removeAt = function (k) {
	var Arr = this.body;
	if ( (k <= this.body.length) & (k > 0)) {
		Arr.splice((k-1),1);
		this.body = Arr; 
		return true;
	} else {return false}
};





/**
 * Создание коллекции из массива значений
 */
Collection.from = function () {
	var newC = new Collection();
	newC.body = arguments[0];
	return newC;
};

