var GroupsignView = {
  renderList: function (groupsigns) {
    AppTemplate.process("groupsigns.html", {groupsign: groupsigns}, function (content) {
      $("#page-groupsigns").html(content);
      $("#page-groupsigns").trigger('create');
    });
  }
};