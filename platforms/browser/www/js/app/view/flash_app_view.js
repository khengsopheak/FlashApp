var LawView = {
  registerRenderList: function (laws) {
    console.log("register-page");
    AppTemplate.process("register.html", {laws: laws}, function (content) {
      $("#page-register").html(content);
      $("#page-register").trigger('create');
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
  },
    nextRegisterRenderList: function (laws) {
    console.log("testing-parail");
    AppTemplate.process("next-register.html", {laws: laws}, function (content) {
      $("#next-register").html(content);
      $("#next-register").trigger('create');
    });
  },

  mapSearchRenderList: function (laws) {
    console.log("testing-parail");
    AppTemplate.process("map-search.html", {laws: laws}, function (content) {
      $("#map-search").html(content);
      $("#map-search").trigger('create');
    });
  }
};