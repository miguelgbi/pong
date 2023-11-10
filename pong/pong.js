document.addEventlistener ('keydown', function(evento){
    var raquete = document.getElementById("raquete_um");
    posicao_topo = parseInt(raquete.style.top)

    if (evento.code == "keyW"){
        raquete.style.top = posicao.top - 5 + "px";
    }else if (evento.code == "keyS") {
        raquete.style.top = posicao.top + 5 + "px";
    }
});