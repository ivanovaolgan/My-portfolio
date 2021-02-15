var fruit = 'Apple';
function getFruit() {
  return {
    fruit: 'Watermelon',
    name: this.fruit
  };
}

console.log(getFruit().name);

var message = 'Simple test';
var note = {
  message: 'Note',
  getMessage: function () {
    return this.message;
  }
};

console.info(note.getMessage.bind(this)());