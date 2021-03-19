$(document).ready(function(){

    // $('#myblock').vide('path/to/video',{
    //     ...options...
    // });
    $('#app').vide({
        m4:'video/video.mp4',
        webm:'video/video.webm',
        ogv:'video/video.ogv',
        poster:'img/cover-image.jpg'
    }
    // ,{
    //     ...options...
    // }
    );
});