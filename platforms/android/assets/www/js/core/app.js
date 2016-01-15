var URL = "http://espr.website/";
var ENDPOINT = "http://resourcemap-sea.instedd.org/api/";

var App = {
  DB_SIZE: 10 * 1024 * 1024, //10mb
  DB_NAME: 'camtraffic_db',
  initialize: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    document.addEventListener('deviceready', this.onDeviceReady, false);
  },
  onDeviceReady: function () {
    console.log('onDeviceReady')
    connectionDB(App.DB_NAME, App.DB_SIZE);
    createTables();
  }
};

App.initialize();