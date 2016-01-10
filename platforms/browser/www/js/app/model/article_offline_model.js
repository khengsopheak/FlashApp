var LawOfflineModel = {
    add: function (laws) {
        $.map(laws, function (law) {
            lawParam = {
                law_id: law.id,
                chapter: law.chapter,
                title: law.title,
                description: law.description
            };
            persistence.add(new Law(lawParam));
        });
        persistence.flush();

    },
    addFavoriteAticle: function (articles) {
        $.map(articles, function (article) {
            lawParam = {
                lawid: article.lawid,
                article: article.article,
                title: article.title,
                description: article.description
            };
            persistence.add(new Law(lawParam));
        });
        persistence.flush();

    },
    update: function (oldLaws, newLaws){
        $.map(newLaws, function (newLaw){
            var isNew = true;
            $.each(oldLaws, function (oldLaw){
                if (oldLaw.law_id() == newLaw.id){
                    isNew = false;
                    oldLaw.chapter(newLaw.chapter);
                    oldLaw.title(newLaw.chapter);
                    oldLaw.description(newLaw.chapter);
                    return false;
                }
                else{
                    isNew = true;
                }
            });
            if (isNew){
                LawOfflineModel.add(newLaws);
            }
        });
        persistence.flush();
    },
    fetchAll: function (callback) {
        Law.all().list(callback);
    }
};