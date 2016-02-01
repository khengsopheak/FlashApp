var URL = "#";
var ENDPOINT = "http://resourcemap-sea.instedd.org/api/";

var App = {
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () { 
  }
};

App.initialize();