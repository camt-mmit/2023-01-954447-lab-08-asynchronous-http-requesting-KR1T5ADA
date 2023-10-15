import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { List, RawList, SearchData, RawSpecies, Species } from '../models';
import { Observable, map } from 'rxjs';
import { parseSpecies, parseSpeciesList } from './../helpers';

const url = 'https://swapi.dev/api/species' as const;

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  private readonly http = inject(HttpClient);
  queryParams: any;

  getAll(params?: SearchData): Observable<List<Species>> {
    return this.http
      .get<RawList<RawSpecies>>(url, { params: params })
      .pipe(map(parseSpeciesList));
  }

  get(id: string): Observable<Species> {
    return this.http.get<RawSpecies>(`${url}/${id}`).pipe(map(parseSpecies));
  }
}
