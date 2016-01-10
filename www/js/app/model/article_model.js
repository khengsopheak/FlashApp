
var ArticleModel = {
    article: {},
    articles: [],
    getArticles: function () {
        return ArticleModel.articles;

    } 
    ,
    fetch: function (successCallback, errorCallback,lid) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "getArticles/"+lid,
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};
