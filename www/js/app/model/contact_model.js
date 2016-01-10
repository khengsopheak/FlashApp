var ContactModel = {
    contacts: [],
    getContacts: function () {
        return ContactModel.contacts;
    },
    fetch: function (successCallback, errorCallback) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "getcontacts",
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};