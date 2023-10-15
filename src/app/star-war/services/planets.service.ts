import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, RawList, RawPlanet, SearchData, Planet } from '../models';
import { parsePlanet, parsePlanetList } from '../helpers';

const url = 'https://swapi.dev/api/planets' as const;

@Injectable({
  providedIn: 'root',
})
export class PlanetService {
  private readonly http = inject(HttpClient);
  queryParams: any;

  getAll(params?: SearchData): Observable<List<Planet>> {
    return this.http
      .get<RawList<RawPlanet>>(url, { params: params })
      .pipe(map(parsePlanetList));
  }

  get(id: string): Observable<Planet> {
    return this.http.get<RawPlanet>(`${url}/${id}`).pipe(map(parsePlanet));
  }
}
