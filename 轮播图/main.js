let allButtons = $('#button > button');
for (let i = 0; i < allButtons.length; i++) {
    $(allButtons[i]).on('click', function (event) {
        let index = $(event.currentTarget).index();
        let p = index * (-300);
        $('#images').css({
            transform: 'translate(' + p + 'px)'
        });
        n = index;
        activeButton(allButtons.eq(n));
    })
}

let n = 0;
let size = allButtons.length;

let timeId = setTime();

$('#window').on('mouseenter', function () {
    window.clearInterval(timeId);
});

$('#window').on('mouseleave', function () {
    timeId = setTime();
});

// 按钮样式变化激活
function activeButton($button) {
    $button.addClass('red').siblings('.red').removeClass('red');
}

// 自动加载click事件
function playSlide(index) {
    allButtons.eq(index).trigger('click');
}

// 定时器
function setTime() {
    return setInterval(() => {
        n += 1;
        playSlide(n % size);
    }, 1000);
}