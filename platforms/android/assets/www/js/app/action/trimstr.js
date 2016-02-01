Handlebars.registerHelper('trimString', function(passedString) {
    var theString = passedString.substring(0,1);
    return new Handlebars.SafeString(theString)
});