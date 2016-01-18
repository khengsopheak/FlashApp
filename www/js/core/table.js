function createTables(){
    Law = persistence.define('laws',{
       law_id: "INT",
       chapter: "TEXT",
       title: "TEXT",
       description: "TEXT"
    });
    Articles = persistence.define('article',{
        lawid: "INT",
        article_kd:"INT",
        article: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
    Contacts = persistence.define('article',{
        law_id: "INT",
        name: "TEXT",
        image: "TEXT",
        longemerg:"VARCHAR",
        sortemerg:"VARCHAR",
        description: "TEXT"

    });
    groupsignlists = persistence.define('article',{
        law_id: "INT",
        chapter: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
    groupsigns = persistence.define('article',{
        law_id: "INT",
        chapter: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
    lawsigns = persistence.define('article',{
        law_id: "INT",
        chapter: "TEXT",
        title: "TEXT",
        description: "TEXT"
    });
}