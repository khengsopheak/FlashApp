 var add={
     newUser:function (){ 
        var firstname=$('#firstName').val();
        var lastname=$('#lastName').val();
        var email=$('#email').val(); 
        
        var password=$('#password').val(); 
//        var imageProfile=('#proImage').val();
        var image = document.getElementById('proImage');
//         a=image.src;
//            alert(imageProfile);
        alert('firstName:'+firstname+'\n lastName:'+lastname+'\n email:'+email+'\n passwor:'+password);
        if(firstname && lastname && password){
                        console.log("ajax");
        $.ajax({
            url:"http://espr.website/flashapp/registers.php",
            type:"POST",
            async:false,
            data:
            {
                btnregister:1,
                firstname:firstname,
                lastname:lastname,
                email:email,
                password:password, 
            },
            success:function(resule){
                //alert("success to inserted");
            }
        })
        }else{
     //       document.getElementById('message-error').style.display='inline';
        }
    }
}