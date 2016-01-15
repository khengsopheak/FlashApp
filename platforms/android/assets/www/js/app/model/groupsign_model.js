
var GroupsignModel = {
  
    groupsigns: [],
    getGroupsigns: function () {
        return GroupsignModel.groupsigns;
    } 
    ,
    fetch: function (successCallback, errorCallback,lsid) {
        $.ajax({
            type: "GET",
            datatype: "JSON",
            url: URL + "getgroupsigns/" + lsid,
            crossDomain: true,
            success: successCallback,
            error: errorCallback
        });
    }
};
