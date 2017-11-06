function createBox() {
    var newDiv = $("<div/>")
        .attr("id", "take_data")
    $(newDiv).insertAfter("button");
}

function Dane() {
    $.getJSON('https://akademia108.pl/kurs-front-end/ajax/1-pobierz-dane-programisty.php', function (data) {
        var programista = "<p>Imie:" + data.imie + " Nazwisko:" + data.nazwisko + " Zawod:" + data.zawod + " Firma:" + data.firma + "</p>";

        if ($("#take_data").length === 0) {
            createBox();
        }
        $('#take_data').append(programista);

    });

}
