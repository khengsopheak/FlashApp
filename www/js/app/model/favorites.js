var FavoritesModle = {
        add: function(favorite){
            articleParam = {
                law_id: article.law_id,
                article: article.id,
                article: article.chapter,
                title: article.title,
                description: article.description
            };
            persistence.add(new Article(articleParam));
            persistence.flush();
    },
    fetchAll: function(){

    }
};