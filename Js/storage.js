function memoria() {
    var f = localStorage.getItem("figura");
    var r = localStorage.getItem("resultado");

    var ventana = window.open("", "_blank", "width=400,height=300");

    if (r) {
        ventana.document.write("<html><head><title>Datos en Memoria</title></head><body>");
        ventana.document.write("<h2>Historial: </h2>");
        ventana.document.write("<p><b>Figura:</b> " + f + "</p>");
        ventana.document.write("<p><b>Resultado:</b> " + r + "</p>");
        ventana.document.write("</body></html>");
    } else {
        ventana.document.write("<h2>vacío</h2>");
    }
}

window.onload = function() {
    var f = localStorage.getItem("figura");
    var r = localStorage.getItem("resultado");

    if (r) {
        document.getElementById("resultadoGeo").innerHTML = "Figura: " + f + "<br>Resultado: " + r;
    }
}