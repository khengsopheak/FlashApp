var LawController = {
    id: "",
    get: function () {
        LawModel.fetch(function (laws) {
            LawView.renderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    }
};