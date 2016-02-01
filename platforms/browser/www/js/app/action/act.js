$(function () {
//    flashApp
    $(document).delegate("#page-laws", "pageshow", function () {
        flashAppController.getRegister();
    });
    //next-register
    $(document).delegate("#next-register", "pageshow", function () {
        flashAppController.getNextRegister();
    });
    //map-search
    $(document).delegate("#map-search", "pageshow", function () {
        flashAppController.getMapSearchRegister();
    });
//    now page 
     $(document).delegate("#page-now", "pageshow", function () {
        flashAppController.getNow();
    });
//    lists page
         $(document).delegate("#page-lists", "pageshow", function () {
        flashAppController.getLists();
    });
//    map page
         $(document).delegate("#page-map", "pageshow", function () {
        flashAppController.getMap();
    });
    //    map page
         $(document).delegate("#page-parial", "pageshow", function () {
        flashAppController.getParial();
    });
    
//     focus search
    $(document).delegate('#btn-search', 'onClick', function () {
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
        }, 100);
    });

//    end loading
});