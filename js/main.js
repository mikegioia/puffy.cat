var fade = 1000
  , show = 3000;

function randomImage() {
    return "images/" + photos[ Math.floor( Math.random() * photos.length ) ].file;
}

function main() {
    var $photo = $( "#photo" );
    $photo.fadeOut( fade, function () {
        $photo.css( "background-image", "url('" + randomImage() + "')" );
        $photo.fadeIn( fade, function () {
            setTimeout( main, show );
        });
    });
}

main();
