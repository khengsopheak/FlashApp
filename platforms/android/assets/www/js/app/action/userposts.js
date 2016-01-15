$('form').submit(function () {
    var postData = $(this).serialize();

    $.ajax({
        type: 'POST',
        data: postData,    
        contentType: "application/x-www-form-urlencoded;charset=UTF-8",
        url: 'http://espr.website/any/userposts.php',
        success: function (data) {
            console.log(data);
            alert('Your comment was successfully added');
        },
        error: function () {
            console.log(data);
            alert('There was an error adding your comment');
        }
    });

    return false;
});