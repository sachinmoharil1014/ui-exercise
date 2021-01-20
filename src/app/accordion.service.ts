import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AccordionService {
  constructor(private httpClient: HttpClient) {}

  public getFaqs(): Observable<any> {
    return this.httpClient.get('/assets/faqs.json');
  }
}
