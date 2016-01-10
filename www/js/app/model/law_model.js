var LawModel = {
    laws: [],
    page: 1,
    getLaws: function () {
        return LawModel.laws;
    },
    fetch: function (successCallback, errorCallback,idPage) {
        console.log("id pagination",idPage);
        $.ajax({
            type: "GET",
            datatype: "JSON",

            //url: URL + "getlaws",
            url: URL + "getlaws?page="+idPage,
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};