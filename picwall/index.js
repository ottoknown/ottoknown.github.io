var oCont = $('.cont');
var oEls = $('.el');
var oCloses = $('.el-close');

var timer = setTimeout(function () {
    oCont.removeClass('cont-init');
}, 200);

oEls.click(function () {
    $(this).addClass('el-active');
    oCont.addClass('cont-active');
})

oCloses.click(function (e) {
    e.stopPropagation();
    $('.el-active').removeClass('el-active');
    oCont.removeClass('cont-active');
})

