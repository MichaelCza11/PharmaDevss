import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleFacCompra } from '../model/detalleFacCompra.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacCompraService {
  
  private baseUrl = 'http://localhost:8080/Detallecompra';

  constructor(private http: HttpClient){ }

  findAll(): Observable<DetalleFacCompra[]> {
      return this.http.get<DetalleFacCompra[]>(this.baseUrl);
    }
  
    findOne(id: number): Observable<DetalleFacCompra> {
      return this.http.get<DetalleFacCompra>(`${this.baseUrl}/${id}`);
    }
  
    save(detalleFacCompra: DetalleFacCompra): Observable<DetalleFacCompra> {
      return this.http.post<DetalleFacCompra>(this.baseUrl, detalleFacCompra);
    }
  
    update(id: number, detalleFacCompra: DetalleFacCompra): Observable<DetalleFacCompra> {
      return this.http.put<DetalleFacCompra>(`${this.baseUrl}/${id}`, detalleFacCompra);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
