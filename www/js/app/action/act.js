$(function () {
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
        }

    });

    $(document).delegate("#page-register", "pageshow", function () {
        console.log("register-page");
        flashAppController.getRegister();
    });

//    flashApp
//    $(document).delegate("#page-register", "pageshow", function () {
//        console.log("register-page");
//        flashAppController.getRegister();
//    });
    //next-register
    $(document). delegate("#next-register", "pageshow", function () {
        flashAppController.getNextRegister();
    });
    //map-search
    $(document).delegate("#map-search", "pageshow", function () {
        flashAppController.getMapSearchRegister();
    });
//    now page 
     $(document).delegate("#page-now", "pageshow", function () {
         console.log("testomg");
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
    $(document).ready(function(){
        $('.btnSubmit').on("click",function(){
            alert("click successful");
        });
    });

//    end loading
});