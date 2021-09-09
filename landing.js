$(function() {
    var overlay = $('<div id="overlay"></div>');
    overlay.show();
    overlay.appendTo(document.body);
    $('.popup').show();
    $('.covid').click(function() {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
    $('.cowin').click(function() {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });




    $('.x').click(function() {
        $('.popup').hide();
        overlay.appendTo(document.body).remove();
        return false;
    });
});