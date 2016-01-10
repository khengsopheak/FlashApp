var LawView = {
  renderList: function (laws) {
    var isLastPage = LawModel.page == LawController.lastPage;
    console.log('isLastPage : ', isLastPage);
    AppTemplate.process("laws.html", {laws: laws, isLastPage: isLastPage}, function (content) {

      $("#page-laws").append(content);
      $("#page-laws").trigger('create');
    });
  }
};