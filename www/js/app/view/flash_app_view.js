var LawView = {
  registerRenderList: function (laws) {
    AppTemplate.process("register.html", {laws: laws}, function (content) {
      $("#page-laws").html(content);
      $("#page-laws").trigger('create');
    });
  },
  nowRenderList: function (laws) {
      console.log("testing");
    AppTemplate.process("now.html", {laws: laws}, function (content) {
      $("#page-now").html(content);
      $("#page-now").trigger('create');
    });
  },
    listsRenderList: function (laws) {
      console.log("testing-lists");
    AppTemplate.process("lists.html", {laws: laws}, function (content) {
      $("#page-lists").html(content);
      $("#page-lists").trigger('create');
    });
  },
    mapRenderList: function (laws) {
      console.log("testing-map");
    AppTemplate.process("map.html", {laws: laws}, function (content) {
      $("#page-map").html(content);
      $("#page-map").trigger('create');
    });
  },
     parialRenderList: function (laws) {
      console.log("testing-parail");
    AppTemplate.process("parial.html", {laws: laws}, function (content) {
      $("#page-parial").html(content);
      $("#page-parial").trigger('create');
    });
  }
};