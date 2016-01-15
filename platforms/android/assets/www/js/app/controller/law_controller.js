var LawController = {
    id: "",
    lastPage:0,
    get: function () {
        LawModel.fetch(function (laws) {
                //LawController.syn(laws.data);
                LawController.lastPage=laws.last_page;
                LawView.renderList(laws.data);
                console.log('laws L ', laws.data);
              //console.log("lin9 last page:",LawController.lastPage);
            },
            function (error) {
                console.log('error ; ', error);
            },LawModel.page);
        console.log("line14 last page:", LawController.lastPage);
        console.log("page id",LawModel.page);
    },
    getArticle: function () {
        ArticleModel.fetch(function (articles) {
            ArticleView.renderList(articles.data);
        },
                function (error) {
                    console.log('error : ', error);
                },
                LawController.id
                );
    },
    //syn: function (laws){
    //    LawOfflineModel.fetchAll(function (oldLaws){
    //        console.log("oldLaws : ", oldLaws.lenght);
    //        LawOfflineModel.update(oldLaws, laws);
    //    });
    //}
};

