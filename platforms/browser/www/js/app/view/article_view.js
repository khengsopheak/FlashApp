var ArticleView = {
  renderList: function (articles) {
    AppTemplate.process("articles.html", {article: articles}, function (content) {
      $("#page-articles").html(content);
      $("#page-articles").trigger('create');
    });
  }
};