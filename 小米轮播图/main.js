let allButtons = $('#menu button');
let n = 0;
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (e) {
        let index = $(e.currentTarget).index();
        let pixel = index * (-920);
        $('#images').css({transform: 'translateX(' + pixel + 'px)'});
        n = index;
        $(allButtons).eq(n).addClass('active').siblings().removeClass('active')
    });
}

let buttonLength = allButtons.length;

let timer = setTime();

$('#main').on('mouseenter', function () {
    window.clearInterval(timer);
});
$('#main').on('mouseleave', function () {
    timer = setTime();
});

$(document).on('visibilitychange', function () {
    if (document.hidden) {
        window.clearInterval(timer)
    } else {
        timer = setTime();
    }
});

function setTime() {
    return setInterval(function () {
        n++;
        if (n > buttonLength - 1) {
            n = 0;
        }
        $(allButtons).eq(n).trigger('click');
    }, 3000);
}