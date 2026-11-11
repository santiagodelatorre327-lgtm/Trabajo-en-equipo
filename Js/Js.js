var geo = {
    res: 0,
    fig: "",

    guardar: function() {
        localStorage.setItem("figura", this.fig);
        localStorage.setItem("resultado", this.res);
        
        document.getElementById("resultadoGeo").innerHTML = "Figura: " + this.fig + "<br>Resultado: " + this.res;
    },

    vPrisma: function() {
        var l = parseFloat(prompt("Ingresa el largo:"));
        var a = parseFloat(prompt("Ingresa el ancho:"));
        var h = parseFloat(prompt("Ingresa la altura:"));
        this.res = l * a * h;
        this.fig = "Prisma Rectangular";
        this.guardar();
    },
    
    vPrismaTri: function() {
        var b = parseFloat(prompt("Ingresa la base del triángulo:"));
        var h = parseFloat(prompt("Ingresa la altura del triángulo:"));
        var hp = parseFloat(prompt("Ingresa la altura del prisma:"));
        this.res = ((b * h) / 2) * hp;
        this.fig = "Prisma Triangular";
        this.guardar();
    },

    vEsfera: function() {
        var r = parseFloat(prompt("Ingresa el radio:"));
        this.res = (4 / 3) * 3.1416 * (r * r * r);
        this.fig = "Esfera";
        this.guardar();
    },

    aTrapecio: function() {
        var B = parseFloat(prompt("Ingresa base mayor:"));
        var b = parseFloat(prompt("Ingresa base menor:"));
        var h = parseFloat(prompt("Ingresa altura:"));
        this.res = ((B + b) * h) / 2;
        this.fig = "Trapecio";
        this.guardar();
    },

    aHexagono: function() {
        var p = parseFloat(prompt("Ingresa perímetro:"));
        var a = parseFloat(prompt("Ingresa apotema:"));
        this.res = (p * a) / 2;
        this.fig = "Hexágono";
        this.guardar();
    },

    aTriangulo: function() {
        var b = parseFloat(prompt("Ingresa base:"));
        var h = parseFloat(prompt("Ingresa altura:"));
        this.res = (b * h) / 2;
        this.fig = "Triángulo";
        this.guardar();
    }
}

function cambiar() {
    var tipo = parseInt(document.getElementById("tipoCalculo").value);
    var select = document.getElementById("figuras");

    if (tipo === 1) { 
        select.innerHTML = '<option value="1">Prisma Rectangular</option><option value="2">Prisma Triangular</option><option value="3">Esfera</option>';
    } else if (tipo === 2) { 
        select.innerHTML = '<option value="4">Trapecio</option><option value="5">Hexágono</option><option value="6">Triángulo</option>';
    }
}

function confirmar() {
    var f = parseInt(document.getElementById("figuras").value);

    switch(f) {
        case 1: geo.vPrisma(); break;
        case 2: geo.vPrismaTri(); break;
        case 3: geo.vEsfera(); break;
        case 4: geo.aTrapecio(); break;
        case 5: geo.aHexagono(); break;
        case 6: geo.aTriangulo(); break;
    }
}