let n;
// $('.images > img:nth-child(1)').addClass('current');
// $('.images > img:nth-child(2)').addClass('enter');
// $('.images > img:nth-child(3)').addClass('enter');
// $('.images > img:nth-child(4)').addClass('enter');
// $('.images > img:nth-child(5)').addClass('enter');
reset();

// setTimeout(() => {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(2)').removeClass('enter').addClass('current');
// }, 3000);
//
// setTimeout(() => {
//     $('.images > img:nth-child(2)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(3)').removeClass('enter').addClass('current');
// }, 6000);
//
// setTimeout(() => {
//     $('.images > img:nth-child(3)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(4)').removeClass('enter').addClass('current');
// }, 9000);
//
// setTimeout(() => {
//     $('.images > img:nth-child(4)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(5)').removeClass('enter').addClass('current');
// }, 12000);
//
// setTimeout(() => {
//     $('.images > img:nth-child(5)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(1)').removeClass('enter').addClass('current');
// }, 15000);
//
// setTimeout(() => {
//     $('.images > img:nth-child(1)').removeClass('current').addClass('leave')
//         .one('transitionend', (event) => {
//             $(event.currentTarget).removeClass('leave').addClass('enter')
//         });
//     $('.images > img:nth-child(2)').removeClass('enter').addClass('current');
// }, 18000);


setInterval(() => {
    makeLeave(getImage(n))
        .one('transitionend', (event) => {
            makeEnter($(event.currentTarget))
        });
    makeCurrent(getImage(n + 1));
    n += 1;
}, 3000);

function x(n) {
    if (n > 5) {
        n = n % 5;
        if (n === 0) {
            n = 5;
        }
    }
    return n;
}

function reset() {
    n = 1;
    $(`.images > img:nth-child(${x(n)})`).addClass('current')
        .siblings().addClass('enter')
}

function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`);
}

function makeCurrent($node) {
    return $node.removeClass('enter').addClass('current')
}

function makeLeave($node) {
    return $node.removeClass('current').addClass('leave')
}

function makeEnter($node) {
    return $node.removeClass('leave').addClass('enter')
}