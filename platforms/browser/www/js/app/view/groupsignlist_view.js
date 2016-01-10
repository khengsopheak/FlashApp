var GroupsignlistView = {
  renderList: function (groupsignlists) {
    AppTemplate.process("groupsignlists.html", {groupsignlists: groupsignlists}, function (content) {
      $("#page-groupsignlists").html(content);
      $("#page-groupsignlists").trigger('create');
    });
  }
};