exports.welcomeUser = function(username) {
    console.log(`Welcome back, ${username}.`)
};

exports.date = function() {
    var currentDate = new Date();
    currentDate = currentDate.toDateString();
    console.log(currentDate);
};