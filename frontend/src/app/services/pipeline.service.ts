import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private apiUrl = 'http://localhost:8000/pipeline';

  constructor(private http: HttpClient) {}

  processItems(items: number[]): Observable<any> {
    return this.http.post(this.apiUrl, { items }); // 👈 POST aqui!
  }
}
