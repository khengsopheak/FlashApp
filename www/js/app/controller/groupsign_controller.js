var GroupsignController = {
    id: "",
    getGroupsignlist: function () {
        GroupsignlistModel.fetch(function (groupsignlists) {
            GroupsignlistView.renderList(groupsignlists);

        },
                function (error) {
                    console.log('error : ', error);
                },
                GroupsignController.id
                );

    }

};
