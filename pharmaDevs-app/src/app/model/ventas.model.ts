import { Cliente } from "./cliente.model";
import { Facturaventa } from "./facturaVenta.model";

export interface Ventas{
    idVentas: number;
    Fechaventa: Date;
    Formapago: string;
    Totalventa: string;
    cliente: Cliente;
    facturaventa: Facturaventa;
}