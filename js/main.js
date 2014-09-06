var fade = 1000
  , show = 3000
  , photoCount = photos.length
  , index = 0
  , $photo = $( '#photo' )
  , shuffled = [];

function shuffle ( array ) {
    for (
        var j, x, i = array.length;
        i;
        j = Math.floor( Math.random() * i ),
        x = array[ --i ],
        array[ i ] = array[ j ],
        array[ j ] = x );
    return array;
};

function nextImage() {
    var path = "images/" + shuffled[ index ].file;
    index++;
    if ( index >= photoCount ) {
        index = 0;
    }
    return path;
}

function main() {
    $photo.fadeOut( fade, function () {
        $photo.css( "background-image", "url('" + nextImage() + "')" );
        $photo.fadeIn( fade, function () {
            setTimeout( main, show );
        });
    });
}

shuffled = shuffle( photos );
main();
