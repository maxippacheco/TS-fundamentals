
//Identificadores numericos que agregan expresividad al programa
enum Tallas {
    Chica= 1,
    Mediana = 2,
    Grande = 3
}

enum PaymentState{
    Creado, // 0
    Pagado, // 1
    EnDeuda // 2
}

class Pedido{
    talla: number;
}

let pedido: Pedido = new Pedido();

pedido.talla = Tallas.Chica;