var FlashApp = {
    add_add:"",
    mapsAdd:"",
    addAddress: function () {
        FlashApp.add_add = $('#add-address').val();
    },
    getAddress:function(){
        FlashApp.mapsAdd = $('#search-location').val();
    },
    btnYes:function (){
        alert('you was like this event');
    },
    btnNo:function (){
        alert('you was not like this event');
    }
    
}