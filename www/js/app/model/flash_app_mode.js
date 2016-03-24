var FlashAppModele = {
    flashApps: [],
    getLaws: function () {
        return FlashAppModele.flashApps;
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