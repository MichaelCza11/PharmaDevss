import { Cliente } from "./cliente.model";

export interface Facturaventa{
    idFacturaventa: number;
    Fecha: Date;
    Montototal: string;
    imagen?: string;
    cliente: Cliente;

    [key: string]: any;
}