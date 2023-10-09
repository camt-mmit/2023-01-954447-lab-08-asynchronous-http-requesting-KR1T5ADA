import { Injectable, inject } from '@angular/core';
import { Observable, map, switchMap } from 'rxjs';
import { TokenService } from './token.service';
import {
  EventFormData,
  EventQueryParams,
  EventResource,
  EventsList,
  parseEventResource,
  parseEventsList,
} from '../models';
import { HttpClient } from '@angular/common/http';

const url = 'https://people.googleapis.com/v1/people/me/connections' as const;

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private readonly tokenService = inject(TokenService);
  private readonly http = inject(HttpClient);

  getAll(params?: EventQueryParams): Observable<EventsList> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) =>
        this.http.get<EventsList>(url, {
          headers: {
            Authorization: authorizationHeader,
          },
          params,
        }),
      ),
      map((eventsList) => parseEventsList(eventsList)),
    );
  }

  create(eventFormData: EventFormData): Observable<EventResource> {
    return this.tokenService.getAuthorizationHeader().pipe(
      switchMap((authorizationHeader) =>
        this.http.post<EventResource>(url, eventFormData, {
          headers: {
            Authorization: authorizationHeader,
          },
        }),
      ),
      map(parseEventResource),
    );
  }
}
