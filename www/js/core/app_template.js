var AppTemplate = {
  compile: function (templateText, templateData, callback) {
    var template = Handlebars.compile(templateText);
    var content = template(templateData);
    callback(content);
  },
  process: function (templateURL, templateData, callback) {
    var path = "template/" + templateURL;
    var templateText = AppCache.get(templateURL);;
    if (templateText) {
      AppTemplate.compile(templateText, templateData, callback);
    } else {
      $.ajax({
        url: path,
        cache: true,
        success: function (templateText) {
          AppCache.set(templateURL, templateText);
          AppTemplate.compile(templateText, templateData, callback);
        }
      });
    }
  }
};