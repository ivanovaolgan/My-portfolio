// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var normalizeHashTags = require('./index.js');

assert.deepEqual(
    normalizeHashTags(['web', 'coursera', 'JavaScript', 'Coursera', 'script', 'programming']),
    'web, coursera, javascript, script, programming',
    'Список "web, coursera, JavaScript, Coursera, script, programming"' +
    ' содержит хэштеги "web, coursera, javascript, script, programming"'
);

console.info('OK!');

assert.deepEqual(
    normalizeHashTags(['web', 'Web', 'WEB']),
    'web',
    'Список "web, Web, WEB"' +
    ' содержит хэштеги "web"'
);

console.info('OK!');