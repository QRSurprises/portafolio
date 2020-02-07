//CAMBIA LA FORMA EN LA QUE SUBE Y BAJA DE SECCIÓN.
var downAndUp = function() {
    $('a').click(function(event) {
        var self = this;
        // console.log($(self).attr('href'));
        event.stopPropagation();
        var Position = $($(self).attr('href')).offset().top;
        $('html, body').animate({
            scrollTop: Position
        }, 1000);
        return false;
    });
};

var preOrNext = function() {
    $('section#productoEstrella div.w3-display-middle preOrNext').click(function() {
        var escondoEl = $(this).attr('escondoEl');
        var muestroEl = $(this).attr('muestroEl');

        $('#contenedor' + escondoEl).hide('fast');
        $('#contenedor' + muestroEl).show('fast');
    });
}

var isDebug = function() {

    return false;
    // return true;
}

var eventMessagesButtonWhatsapp = function() {
    var arrayMessages = ["QR will surprise you 🤳🎁", "@QR_Surprises", "Follow us!", "#ComingSoon 🔜"];
    var numMessages = arrayMessages.length;
    var cont = 0;
    var iconWhatsapp = '<i class="fa fa-instagram withoutShadow" aria-hidden="true"></i> ';

    function changeMessage() {
        var btn = $('#btnSendWhatsapp > span');
        btn.hide('fast', function() {
            btn.html(iconWhatsapp + ' ' + arrayMessages[cont]).show('slow');
        });
        if (cont == (numMessages - 1)) {
            cont = 0;
        } else {
            cont++;
        }
    }

    setInterval(changeMessage, 2500);
}

$(document).ready(function() {
    console.log("Simón Bustamante Alzate - Copyright © Todos los Derechos Reservados");
    console.log("Repositorio de GitHub: https://github.com/Simonba97/new");

    eventMessagesButtonWhatsapp();
    downAndUp();
    preOrNext();
});