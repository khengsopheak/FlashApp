
var LawsignController = {
    id: "",
    get: function () {
        LawsignModel.fetch(function (lawsigns) {
            LawsignView.renderList(lawsigns);
        },
                function (error) {
                    console.log('error ; ', error);
                });
    }
    ,
    getGroupsign: function () {
        GroupsignModel.fetch(function (groupsigns) {
            GroupsignView.renderList(groupsigns);
        },
                function (error) {
                    console.log('error : ', error);
                },
                LawsignController.id
                );
    }

};

