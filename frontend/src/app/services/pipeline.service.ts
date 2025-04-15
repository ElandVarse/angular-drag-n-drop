// src/app/services/pipeline.service.ts
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PipelineService {
  private apiUrl = 'http://127.0.0.1:8000/pipeline';

  constructor(private http: HttpClient) {}

  processItems(items: number[]) {
    return this.http.post(this.apiUrl, { items });
  }
}

