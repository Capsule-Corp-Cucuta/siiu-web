import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UrlConstants } from 'src/app/shared/constants/url-constants';
import { environment } from 'src/environments/environment';
import { Advisory } from '../models/advisory.model';

@Injectable({
  providedIn: 'root',
})
export class AdvisoryService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.ADVISORY}`;

  constructor(private http: HttpClient) {}

  public create(advisory: Advisory): Observable<Response> {
    return this.http.post<Response>(AdvisoryService.ENDPOINT, advisory);
  }

  public update(advisory: Advisory): Observable<Response> {
    return this.http.put<Response>(
      AdvisoryService.ENDPOINT + '/' + advisory.id,
      advisory,
    );
  }

  public findByID(id: number): Observable<Advisory> {
    return this.http.get<Advisory>(AdvisoryService.ENDPOINT + '/' + id);
  }

  public findByConsultant(id: string): Observable<Advisory[]> {
    return this.http.get<Advisory[]>(
      AdvisoryService.ENDPOINT + '/consultant/' + id,
    );
  }

  public findByClient(id: string): Observable<Advisory[]> {
    return this.http.get<Advisory[]>(
      AdvisoryService.ENDPOINT + '/client/' + id,
    );
  }

  public findAll(): Observable<Advisory[]> {
    return this.http.get<Advisory[]>(AdvisoryService.ENDPOINT);
  }

  public findAdvisoryByConsultantBetweenDates(
    idConsultant: string,
    startDate: Date,
    endDate: Date,
  ): Observable<number> {
    return this.http.get<number>(
      `${AdvisoryService.ENDPOINT}/consultant/${idConsultant}/between-dates/count`,
      {},
    );
  }
}
