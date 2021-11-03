class Pieza{
    public color:string;
    public tipo:string;
    constructor(tipo,color){
        this.tipo=tipo;
        this.color=color;
    }

    public posiblesMovimientos(){
        
    }
}

class Tablero{
    public celdas:Map<string,string>; // Siendo la clave el nombre de la celda Ej:"A1" y el valor, el color Ej:"Blanco"
    constructor(){}
}


function crearPiezas(tipo:string,color:string):Pieza{
    let pieza = new Pieza(tipo,color);
    
    switch (tipo) {
        case "peon":
            pieza.posiblesMovimientos();
            break;
    
        default:
            break;
    }
    return pieza;
}