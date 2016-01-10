var LawsignModel = {
    lawsigns: [],
    page:1,
    getLawsigns: function () {
        return LawModel.lawsigns;
    },
    fetch: function (successCallback, errorCallback,signId) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "getlawsigns?page="+signId,
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};