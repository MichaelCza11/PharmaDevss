import { Facturaventa } from "./facturaVenta.model";
import { Producto } from "./producto.model";

export interface DetalleFacVenta{
    idDetalleventa: number;
    Cantidad: string;
    Preciounitario: string;
    Iva: string;
    Subtotal: string;
    producto: Producto;
    facturaventa: Facturaventa;

    [key: string]: any;
}