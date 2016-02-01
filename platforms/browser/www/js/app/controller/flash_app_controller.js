var flashAppController = {
    id: "",
    getRegister: function () {
        LawModel.fetch(function (laws) {
            LawView.registerRenderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    },
    getNow: function () {
        LawModel.fetch(function (laws) {
            LawView.nowRenderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    },
       getLists: function () {
        LawModel.fetch(function (laws) {
            LawView.listsRenderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    }, 
    getMap: function () {
        LawModel.fetch(function (laws) {
            LawView.mapRenderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    },
     getParial: function () {
        LawModel.fetch(function (laws) {
            LawView.parialRenderList(laws);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    },
    getNextRegister: function () {
        LawModel.fetch(function (laws) {
                LawView.nextRegisterRenderList(laws);
            },
            function (error) {
                console.log('error ; ', error);
            });
    },
    getMapSearchRegister: function () {
        LawModel.fetch(function (laws) {
                LawView.mapSearchRenderList(laws);
            },
            function (error) {
                console.log('error ; ', error);
            });
    }
};