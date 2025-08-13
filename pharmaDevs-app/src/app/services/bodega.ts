import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Bodega } from '../components/bodega/bodega';
import { B } from '@angular/cdk/keycodes';

@Injectable({
  providedIn: 'root'
})
export class BodegaService {
  
  private baseUrl = 'http://localhost:8080/bodega';

  constructor(private http: HttpClient){ }

  findAll(): Observable<Bodega[]> {
      return this.http.get<Bodega[]>(this.baseUrl);
    }
  
    findOne(id: number): Observable<Bodega> {
      return this.http.get<Bodega>(`${this.baseUrl}/${id}`);
    }
  
    save(bodega: Bodega): Observable<Bodega> {
      return this.http.post<Bodega>(this.baseUrl, bodega);
    }
  
    update(id: number, bodega: Bodega): Observable<Bodega> {
      return this.http.put<Bodega>(`${this.baseUrl}/${id}`, bodega);
    }
  
    delete(id: number): Observable<void> {
      return this.http.delete<void>(`${this.baseUrl}/${id}`);
    }
}
