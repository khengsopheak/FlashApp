var ContactView = {
  renderList: function (contacts) {
    AppTemplate.process("contacts.html", {contacts: contacts}, function (content) {
      $("#page-contacts").html(content);
      $("#page-contacts").trigger('create');
    });
  }
};