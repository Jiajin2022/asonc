
var offset;
var index = 1;
var prev = $('#arrowLeft');
var next = $('#arrowRight');
var interval = 3000;
var len = 3;
var time;


function change(offset) {
    var left = parseInt($('.img').css('left')) + offset;
    if (offset >= 0) offset = '+=' + offset;
    else offset = '-=' + Math.abs(offset);

    $('.img').animate({ 'left': offset }, 300, function () {
        if (left >= 208) $('.img').css('left', -518);
        if (left < (-242 * len)) $('.img').css('left', -34);
    });
}

function play() {
    timer = setTimeout(function () {
        next.trigger('click');
        play();
    }, interval);
}

function stop() {
    clearTimeout(timer);
}


next.bind('click', function () {
    if ($('.img').is(':animated')) return;
    if (index == 3) index = 1;
    else index += 1;
    change(-242);
});

prev.bind('click', function () {

    if ($('.img').is(':animated')) return;
    if (index == 1) index = 3;
    else index -= 1;
    change(242);
});

$('.img').hover(stop, play);
play();
