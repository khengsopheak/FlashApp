var LawModel = {
    laws: [],
    getLaws: function () {
        return LawModel.laws;
    },
    fetch: function (successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "",
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};