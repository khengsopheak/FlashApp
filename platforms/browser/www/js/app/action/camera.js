var pictureSource;   // picture source
var destinationType; // sets the format of returned value
document.addEventListener("deviceready", onDeviceReady, false);
function onDeviceReady() {
    pictureSource = navigator.camera.PictureSourceType;
    destinationType = navigator.camera.DestinationType;
}
function onPhotoDataSuccess(imageData) {
    var smallImage = document.getElementById('smallImage');
    var smallImage2 = document.getElementById('smallImage2');
    smallImage.style.display = 'block';
    smallImage.src = "data:image/jpeg;base64," + imageData;
    smallImage2.value = imageData;

}
function onPhotoURISuccess(imageURI) {
    var largeImage = document.getElementById('largeImage');
    largeImage.style.display = 'block';
    largeImage.src = imageURI;
}
function capturePhoto() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 10,
        destinationType: destinationType.DATA_URL
    });
}
function capturePhotoEdit() {
    navigator.camera.getPicture(onPhotoDataSuccess, onFail, {
        quality: 10, allowEdit: true,
        destinationType: destinationType.DATA_URL
    });
}
function getPhoto(source) {
    navigator.camera.getPicture(onPhotoURISuccess, onFail, {
        quality: 10,
        destinationType: destinationType.FILE_URI,
        sourceType: source
    });
}

function onFail(message) {
    alert('Failed because: ' + message);
}