function createTables(){
    Law = persistence.define('laws',{
        law_id: "INT",
        chapter: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
    favoriteAticle =persistence.define('favoriteArticle',{
        lawid: "INT",
        article: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
}