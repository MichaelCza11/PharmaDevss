import { Proveedor } from "./proveedor.model";

export interface Bodega{
    idBodega: number;
    Nombrematerial: string;
    Cantidad: string;
    Fecharecepcion: Date;
    proveedor: Proveedor;

    [key: string]: any;
}