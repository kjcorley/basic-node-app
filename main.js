const greetings = require('./greeting.js');
const dashboard = require('./dashboard.js');

// "Hello"
greetings.greetingEnglish();

// "Konichiwa"
greetings.greetingJapanese();

greetings.greetingSpanish();

greetings.greetingIcelandic();

dashboard.welcomeUser('user1');

dashboard.date();