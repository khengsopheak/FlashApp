$(document).on("pageinit", "#page,#page-laws,#page-lawsigns", function () {
    $(document).on("swiperight", "#page", function (e) {
        if ($.mobile.activePage.jqmData("panel") !== "open") {
//            if (e.type === "swipeleft") {
//                $("#right-panel").panel("open");
//            } else if (e.type === "swiperight") {
                $("#left-panel1").panel("open");
//            }
        }
    });
    $(document).on("swiperight", "#page-laws", function (e) {
        if ($.mobile.activePage.jqmData("panel") !== "open") {

                $("#left-panel2").panel("open");

        }
    });
    $(document).on("swiperight", "#page-lawsigns", function (e) {
        if ($.mobile.activePage.jqmData("panel") !== "open") {

                $("#left-panel3").panel("open");

        }
    });
});