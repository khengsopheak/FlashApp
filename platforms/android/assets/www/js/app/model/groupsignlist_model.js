
var GroupsignlistModel = {
  
    groupsignlists: [],
    getGroupsignlists: function () {
        return GroupsignlistModel.groupsignlists;
    } 
    ,
    fetch: function (successCallback, errorCallback,gsid) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "getgroupsignlists/" + gsid,
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};
