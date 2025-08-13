import { Proveedor } from "./proveedor.model";

export interface FacturaCompra{
    idFacturacompra: number;
    Fecha: Date;
    Montototal: string;
    proveedor: Proveedor;

    [key: string]: any;
}