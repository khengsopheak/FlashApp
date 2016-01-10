var ContactController = {
    get: function () {
        ContactModel.fetch(function (contacts) {
            ContactView.renderList(contacts);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    }
};

