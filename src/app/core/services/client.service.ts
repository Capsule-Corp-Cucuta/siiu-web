import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Client } from '../models/client.model';
import { environment } from 'src/environments/environment';
import { UrlConstants } from 'src/app/shared/constants/url-constants';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  static ENDPOINT = `${environment.APIUrl}${UrlConstants.ENDPOINTS.CLIENT}`;

  constructor(private http: HttpClient) {}

  public update(client: Client): Observable<Response> {
    console.log(client);

    return this.http.put<Response>(
      ClientService.ENDPOINT + '/' + client.id,
      client,
    );
  }

  public findByID(id: string): Observable<Client> {
    return this.http.get<Client>(ClientService.ENDPOINT + '/' + id);
  }

  public findByConsultant(id: string): Observable<Client[]> {
    return this.http.get<Client[]>(
      ClientService.ENDPOINT + '/consultant/' + id,
    );
  }

  public findAll(): Observable<Client[]> {
    return this.http.get<Client[]>(ClientService.ENDPOINT);
  }

  public assign(contact: string, consultant: string): Observable<Response> {
    return this.http.post<Response>(
      `${ClientService.ENDPOINT}/${contact}/consultant/${consultant}`,
      {},
    );
  }
}
