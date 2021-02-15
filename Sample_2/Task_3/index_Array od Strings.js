// Телефонная книга
var phoneBook = [];

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
	// ...
	var commandArray = command.split(' ');
    var commandName = commandArray[0];
    function addcontact(contactName, contactPhones){
			    phoneBook[phoneBook.length]= contactName + ': '+contactPhones;
			};
    function addPhone(i,phone){
			    phoneBook[i]=phoneBook[i]+','+phone;
			};

    
    // Обработка команды ADD
    if (commandName === 'ADD') {
            var contactName = commandArray[1], contactPhones = commandArray[2];
			var i = phoneBook.findIndex(element => element.startsWith(contactName)==true);
			console.log(commandName + ' '+i);
			if (i==-1){
			   addcontact(contactName, contactPhones);
			}
			  else {
			        addPhone(i,contactPhones);
			  }
			console.log(phoneBook);

        }

    // Обработка команды REMOVE_PHONE
    if (commandName === 'REMOVE_PHONE') {
            // ...
            
            // Не забыть вернуть результат выполнения функции remove_phone
            //return remove_phone(/**/);
        }

    // Обработка команды SHOW
    if (commandName === 'SHOW') {
            console.log(phoneBook);
        }

};
