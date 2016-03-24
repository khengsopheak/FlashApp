$(function () {
    $(document).on("mobileinit", function() {
        $.mobile.toolbar.prototype.options.hideDuringFocus = "";
    });
    $(document).delegate("#btnregister", "click", function () {
        var firstname=$('#firstname').val();
        var lastname=$('#lastname').val();
        var email=$('#email').val();
        var password=$('#password').val();
        var description=$('#description').val();
        var n = email.indexOf("@");
        alert(n);
        if(firstname!='' && lastname!='' && n!=-1 && password!=''){
        $.ajax({
            url:"http://espr.website/registers.php",
            type:"POST",
            async:false,
            data:
            {
                btnregister:1,
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password,
                description:description
            },
            success:function(resule){
                //alert("success to inserted");
            }
        })
        }else{
            document.getElementById('message-error').style.display='inline';
        }

    });
    
 
    $(document).delegate("#page-now", "pageshow", function () {

        console.log("register-page");
        FlashAppController.getNow();
    });
    $(document).delegate("#page-register", "pageshow", function () {
        console.log("register-page");
        FlashAppController.getRegister();
    });
    $(document).delegate("#page-parail", "pageshow", function () {
        console.log("parail-page");
        FlashAppController.getParail();
    });
    $(document).delegate("#page-add-maps", "pageshow", function () {
        console.log("maps-page");
        FlashAppController.getAddMaps();
    });

    $(document).delegate("#page-maps", "pageshow", function () {
        console.log("maps-page");
        FlashAppController.getMaps();
    });
    $(document).delegate("#page-add-event", "pageshow", function () {
        console.log("maps-page");
        FlashAppController.getAddEvent();
    });
    $(document).delegate("#page-list", "pageshow", function () {
        console.log("maps-page");
        FlashAppController.getList();
    });
    $(document).delegate("#page-add-new-event", "pageshow", function () {
        $.mobile.toolbar.prototype.options.hideDuringFocus = "";
        if(FlashApp.mapsAdd){
            document.getElementById('add-address').value=FlashApp.mapsAdd;
        }
        FlashAppController.getAddNewEvent();
    });
    $(document).delegate("#page-add-map", "pageshow", function () {
        initialize();
        //searchBox.addListener();
        //$("#page-add-map").trigger("create");
        //$.mobile.pageContainer.pagecontainer( "change", "index.html#page-add-map", { reload: true} );
        //console.log("maps-refresh-page");
        //alert(FlashApp.add_add);
        document.getElementById('search-location').value=FlashApp.add_add;
    });


//     focus search
    $(document).delegate('#btn-search', 'onClick', function () {
        $("#popupsearch").popup({
            afteropen: function () {
                $('#filterlaw').focus();
            }
        });
    });
    function brnclick(){
        $("#popupsearch").popup({
            afteropen: function () {
                $('#filterlaw').focus();
            }
        });
    }


    $(document).on("keypress", "#searchbar", function (e) {
        var searchbar = $(this);
        //your code
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
    $(document).ready(function(){
        $('.btnSubmit').on("click",function(){
            alert("click successful");
        });
    });

//    end loading
});