/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
		if (arguments.length == 1){
			return collection;
		}
		else 
		{
			var functionName;
			/*/first complete all filterIn functions
			for(var i = 1; i < arguments.length; i++){
				
				if (arguments[i].startswith ){}
				
			}*/
			//second complete all select functions
			var newCollection = collection;
			for(var i = 1; i < arguments.length; i++){
				functionName = arguments[i].name;//
                if (functionName == 'filterIn'){
                    newCollection = arguments[i](newCollection);
                };
                 
			};
            for(var i = 1; i < arguments.length; i++){
                functionName = arguments[i].name;//
                if (functionName == 'select'){
                    newCollection = arguments[i](newCollection);
                };
                 
            }
		}
		return newCollection;
}


/**
 * @params {String[]}
 */
function select() {
 	var fields = [].slice.call(arguments);
    
    return function select(collection) {
        var keys = Object.keys(collection[0]);
        
        for(j = 0; j < fields.length; j++){
	        	if (keys.includes(fields[j])==0){
	        		fields.splice(j,1);
	        	}
	    }    	
	     
	    var newCollection=[];
        var collectionItem;
        var newCollectionItem;
        
        for(i = 0; i < collection.length; i++){
        	newCollectionItem={};
        	collectionItem = collection[i];
        	
            for(j = 0; j < fields.length; j++){
        		
        		var key = fields[j];
        		var value = collectionItem[key];
        		newCollectionItem[key] = value;
        	}
        	newCollection.push(newCollectionItem);
        }
        return newCollection;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
	var field = property;
    var values = values;
    var value;
    return function filterIn(collection){
	    var newCollection = [];
        var newCollectionItem = {};
        var collectionItem = {};
        for (i = 0; i < collection.length; i++){
            collectionItem = collection[i];
            value = collectionItem[field];
            if (values.includes(value) == 1){
                newCollectionItem = collectionItem;
                newCollection.push(newCollectionItem);
            }
            
        }


		return newCollection;
	}
	
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};


var friends = [
    {
        name: 'Сэм',
        gender: 'Мужской',
        email: 'luisazamora@example.com',
        favoriteFruit: 'Картофель'
    },
    {
        name: 'Эмили',
        gender: 'Женский',
        email: 'example@example.com',
        favoriteFruit: 'Яблоко'
    },
    {
        name: 'Мэт',
        gender: 'Мужской',
        email: 'danamcgee@example.com',
        favoriteFruit: 'Яблоко'
    }
, ];
