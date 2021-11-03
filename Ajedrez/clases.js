var Pieza = /** @class */ (function () {
    function Pieza(tipo, color) {
        this.tipo = tipo;
        this.color = color;
    }
    Pieza.prototype.posiblesMovimientos = function () {
    };
    return Pieza;
}());
var Tablero = /** @class */ (function () {
    function Tablero() {
    }
    return Tablero;
}());
function crearPiezas(tipo, color) {
    var pieza = new Pieza(tipo, color);
    switch (tipo) {
        case "peon":
            pieza.posiblesMovimientos();
            break;
        default:
            break;
    }
    return pieza;
}
