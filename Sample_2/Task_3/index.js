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
		    phoneBook[phoneBook.length]={
		     contactName: contactName,
		     contactPhones: contactPhones
		    };
	};

    function addPhone(i,phone){
	   var contactName=phoneBook[i].contactName;
	   var contactPhones = phoneBook[i].contactPhones.concat(phone);
	     
			phoneBook[i]={
	     	contactName: contactName,
		    contactPhones: contactPhones
		    };
	};

	function remove_phone(){
			
			
	};
    
    // Обработка команды ADD
    if (commandName === 'ADD') {
            var contactName = commandArray[1], contactPhones = commandArray[2].split(',');
			var i = phoneBook.findIndex(element => element.contactName==contactName);
			if (i==-1){
			       addcontact(contactName, contactPhones);
			}
			  else {
			        addPhone(i,contactPhones);
			  }

        }

    // Обработка команды REMOVE_PHONE
    if (commandName === 'REMOVE_PHONE') {
            var removePhone = commandArray[1];
            var di = phoneBook.findIndex(element => element.contactPhones.includes(removePhone)==true);
            if (di == -1){
            	return false;
            }
            else{
			phoneBook[di].contactPhones = phoneBook[di].contactPhones.filter(element => element!=removePhone);
            return true;
            }
        }

    // Обработка команды SHOW
    if (commandName === 'SHOW') {
            var showPhoneBook;
            showPhoneBook=phoneBook.filter(element => element.contactPhones.length !=0);
			showPhoneBook=showPhoneBook.map(element => element=(element.contactName+': ' + element.contactPhones.join(', ')));
			showPhoneBook=showPhoneBook.sort();
            return showPhoneBook;
        }

};
