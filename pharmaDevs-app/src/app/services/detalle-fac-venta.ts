import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DetalleFacVenta } from '../model/detalleFacVenta.model';

@Injectable({
  providedIn: 'root'
})
export class DetalleFacVentaService {
  
  private baseUrl = 'http://localhost:8080/DetalleVenta';

  constructor(private http: HttpClient){ }

  findAll(): Observable<DetalleFacVenta[]> {
      return this.http.get<DetalleFacVenta[]>(this.baseUrl);
    }
  
    findOne(id: number): Observable<DetalleFacVenta> {
      return this.http.get<DetalleFacVenta>(`${this.baseUrl}/${id}`);
    }
  
    save(detalleFacVenta: DetalleFacVenta): Observable<DetalleFacVenta> {
      return this.http.post<DetalleFacVenta>(this.baseUrl, detalleFacVenta);
    }
  
    update(id: number, detalleFacVenta: DetalleFacVenta): Observable<DetalleFacVenta> {
      return this.http.put<DetalleFacVenta>(`${this.baseUrl}/${id}`, detalleFacVenta);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
