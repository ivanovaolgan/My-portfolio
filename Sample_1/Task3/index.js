/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */
module.exports = function (hours, minutes, interval) {
	if (hours >= 0 && hours <= 23 && minutes >= 0 && minutes <= 59){ 
		var d =new Date(2000,1,1,hours,minutes + interval);
  		return ('0'+d.getHours()).slice(-2)+':' + ('0'+ d.getMinutes()).slice(-2);
  	}
};
