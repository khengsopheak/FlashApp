var LawsignView = {
  renderList: function (lawsigns) {

    var isLastPage = LawsignModel.page == LawsignController.lastPage;
    AppTemplate.process("lawsigns.html", {lawsigns:lawsigns,isLastPage:isLastPage}, function (content) {
      $("#page-lawsigns").append(content);
      $("#page-lawsigns").trigger('create');
    });
  }
};