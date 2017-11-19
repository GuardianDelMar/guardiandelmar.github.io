$(function () {

    var interval = null;

    function getDataExchange() {

        var buyArrow = $('#buy-arrow');
        var currentBuyPrice = parseFloat($('#buy').html());
        console.log(currentBuyPrice);
        var sellArrow = $('#sell-arrow');
        var currentSellPrice = parseFloat($('#sell').html());

        $.getJSON("https://blockchain.info/pl/ticker", function (data) {

            console.log(data);
            console.log(data.PLN.buy);
            console.log(data.PLN.sell);

            $('#buy').html(data.PLN.buy);
            $('#sell').html(data.PLN.sell);

            if (currentBuyPrice < parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
            } else if (currentBuyPrice > parseFloat(data.PLN.buy)) {
                buyArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
            } else {
                buyArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
            }

            if (currentSellPrice < parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'green').removeClass().addClass('fa fa-arrow-up');
            } else if (currentSellPrice < parseFloat(data.PLN.sell)) {
                sellArrow.css('color', 'red').removeClass().addClass('fa fa-arrow-down');
            } else {
                sellArrow.css('color', 'black').removeClass().addClass('fa fa-minus-square-o');
            }
            console.log('test czasu');
        });
    }

    getDataExchange();

    interval = setInterval(getDataExchange, 5000);

    $('.control-button').click('on', function () {
        clearInterval(interval);

        interval = setInterval(getDataExchange, $(this).val());

        $('#refresh-frequency').html($(this).text());
    });
});
