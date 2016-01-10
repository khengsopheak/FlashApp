
var LawsignController = {
    id: "",
    lastPage:0,
    get: function () {
        LawsignModel.fetch(function (lawsigns) {
                console.log('lawsigns.data',lawsigns.data);
                LawsignController.lastPage=lawsigns.last_page;
            LawsignView.renderList(lawsigns.data);
        },
                function (error) {
                    console.log('error ; ', error);
                },LawsignModel.page);
    }
    ,
    getGroupsign: function () {
        GroupsignModel.fetch(function (groupsigns) {
            GroupsignView.renderList(groupsigns.data);
        },
                function (error) {
                    console.log('error : ', error);
                },
                LawsignController.id
                );
    }

};

