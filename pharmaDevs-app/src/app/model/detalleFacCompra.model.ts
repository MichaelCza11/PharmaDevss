import { FacturaCompra } from "./facturaCompra.model";
import { Producto } from "./producto.model";

export interface DetalleFacCompra{
    idDetallecompra: number;
    Cantidad: string;
    Preciounitario: string;
    Iva: string;
    Subtotal: string;
    producto: Producto;
    facturacompra: FacturaCompra;

    [key: string]: any;
}