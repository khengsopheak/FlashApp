$(function () {

//    law
    $(document).delegate("#page-laws", "pageshow", function () {
        LawController.get();
    });
    $(document).delegate("#pagelaw a", "click", function () {
        LawController.id = ($(this).data("id"));
    });

    $(document).delegate("#page-articles", "pageshow", function () {
        LawController.getArticle();
    });


//     lawsign
    $(document).delegate("#page-lawsigns", "pageshow", function () {
        LawsignController.get();
    });

    $(document).delegate("#pagelawsign a", "click", function () {
        LawsignController.id = ($(this).data("id"));
    });

    $(document).delegate("#page-groupsigns", "pageshow", function () {
        //console.log( ' page show of page-groupsigns : ', LawsignController.id);
        LawsignController.getGroupsign();

    });

    $(document).delegate("#pagegroupsign a", "click", function () {
        GroupsignController.id = ($(this).data("id"));
    });

    $(document).delegate("#page-groupsignlists", "pageshow", function () {
        GroupsignController.getGroupsignlist();
    });


//     contact
    $(document).delegate("#page-contacts", "pageshow", function () {
        ContactController.get();

    });
    
//     focus search
    $(document).delegate('#btn-search', 'click', function () {
        $("#popupsearch").popup({
            afteropen: function () {
                $('#filterlaw').focus();
            }
        });
    });


//  loding page
    $(document).on('pagebeforecreate', '[data-role="page"]', function () {
        var interval = setInterval(function () {
            $.mobile.loading('show', {
                text: 'foo',
                textVisible: true,
                theme: 'z',
                html: "<span class='ui-bar ui-corner-all'><img src='css/libs/images/ajax-loader_2.gif'/><h2>loading...</h2></span>"
            });//ui-overlay-c
            clearInterval(interval);
        }, 1);
    });

    $(document).on('pageshow', '[data-role="page"]', function () {
        var interval = setInterval(function () {
            $.mobile.loading('hide');
            clearInterval(interval);
        }, 1000);
    });

//    end loading

});
