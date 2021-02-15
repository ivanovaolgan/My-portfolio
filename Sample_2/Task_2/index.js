/**
 * @param {String[]} hashtags
 * @returns {String}
 */
module.exports = function (hashtags) {
	if (hashtags.length === 0){
	return '';
	}
	else {
         //console.log('not empty');
         var hashtagsLowerCase = hashtags.map(element => element.toLowerCase());
        // hashtagsLowerCase.splice(3,1);
		 //console.log(hashtagsLowerCase);
         for (var i = 0; i < (hashtagsLowerCase.length-1); i++){
         	//console.log('outside circle '+i);
            for (var j = i+1; j < hashtagsLowerCase.length; j++){
               //console.log(i+' '+j);
               if (hashtagsLowerCase[i] == hashtagsLowerCase[j]){
                 //console.log(hashtagsLowerCase[i]);
                 hashtagsLowerCase.splice(j,1);
                 j=j-1;
               }
            }

         }
         
        //console.log(hashtagsLowerCase.join(', '));
         return hashtagsLowerCase.join(', ')
    };
};
