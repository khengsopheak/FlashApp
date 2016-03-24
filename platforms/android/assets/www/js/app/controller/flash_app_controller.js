var FlashAppController = {
    getRegister: function () {
        FlashAppModele.fetch(function (laws) {
                FlashAppView.registerRenderList(laws);
            },
            function (error) {
                console.log('error ; ', error);
            });
    },
    getAddMaps: function () {
        FlashAppModele.fetch(function (maps) {
                FlashAppView.addMapsRenderList(maps);
            },
            function (error) {
                console.log('error ; ', error);
            });
    },
    getAddEvent: function () {
        FlashAppModele.fetch(function (addEvent) {
                FlashAppView.addEventRenderList(addEvent);
            },
            function (error) {
                console.log('error;', error);
            });
    },
    getAddNewEvent: function () {
        FlashAppModele.fetch(function (addNewEvent) {
                FlashAppView.addNewEventRenderList(addNewEvent);
            },
            function (error) {
                console.log('error;', error);
            }
        )

    },

    getNow: function () {
        FlashAppModele.fetch(function (now) {
                FlashAppView.nowRenderList(now);
            },
            function (error) {
                console.log('error;', error);
            }
        )

    },
    getParail: function () {
        FlashAppModele.fetch(function (parail) {
                FlashAppView.parailRenderList(parail);
            },
            function (error) {
                console.log('error;', error);
            }
        )

    },
    getMaps: function () {
        FlashAppModele.fetch(function (maps) {
                FlashAppView.mapsRenderList(maps);
            },
            function (error) {
                console.log('error;', error);
            }
        )
    },
    getList: function () {
        FlashAppModele.fetch(function (lists) {
                FlashAppView.listRenderList(lists);
            },
            function (error) {
                console.log('error;', error);
            }
        )
    }
};