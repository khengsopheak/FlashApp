var FlashAppView = {
  registerRenderList: function (registers) {
    console.log("register-page");
    AppTemplate.process("register.html", {registers: registers}, function (content) {
      $("#page-register").html(content);
      $("#page-register").trigger('create');
    });
  },
    addMapsRenderList: function (addMaps) {
    console.log("maps-page");
    AppTemplate.process("maps.html", {addMaps: addMaps}, function (content) {
      $("#page-add-maps").html(content);
      $("#page-add-maps").trigger('create');
    });
  },
  addEventRenderList: function (addEvent) {
    console.log("addEvent-page");
    AppTemplate.process("add-event.html", {addEnvent: addEvent}, function (content) {
      $("#page-add-event").html(content);
      $("#page-add-event").trigger('create');
    });
  },
  addNewEventRenderList: function (addNewEvent) {
    console.log("addNewEvent-page");
    AppTemplate.process("add-new-event.html", {addNewEvent: addNewEvent}, function (content) {
      $("#page-add-new-event").html(content);
      $("#page-add-new-event").trigger('create');
    });
  },
  nowRenderList: function (now) {
    console.log("addNewEvent-page");
    AppTemplate.process("now.html", {now: now}, function (content) {
      $("#page-now").html(content);
      $("#page-now").trigger('create');
    });
  },
  parailRenderList: function (now) {
    console.log("addNewEvent-page");
    AppTemplate.process("parail.html", {now: now}, function (content) {
      $("#page-parail").html(content);
      $("#page-parail").trigger('create');
    });
  },
  mapsRenderList: function (maps) {
    console.log("maps-page");
    AppTemplate.process("maps.html", {maps: maps}, function (content) {
      $("#page-maps").html(content);
      $("#page-maps").trigger('create');
    });
  },
  listRenderList: function (maps) {
    console.log("maps-page");
    AppTemplate.process("list.html", {maps: maps}, function (content) {
      $("#page-list").html(content);
      $("#page-list").trigger('create');
    });
  }

};