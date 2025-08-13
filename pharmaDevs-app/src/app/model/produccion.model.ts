import { Producto } from "./producto.model";

export interface Produccion{
    idProduccion: number;
    Fechaproduccion: string;
    Fechavencimiento: string;
    Lote: string;
    Cantidadproducida: string;
    producto: Producto;

    [key: string]: any;
}