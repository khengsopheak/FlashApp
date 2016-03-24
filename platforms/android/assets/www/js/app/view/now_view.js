var FlashAppView = {
  renderList: function (laws) {
    AppTemplate.process("register.html", {laws: laws}, function (content) {
      $("#page-laws").html(content);
      $("#page-laws").trigger('create');
    });
  }
};