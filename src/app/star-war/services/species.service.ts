import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { List, RawList, RawSpecies, SearchData, Species } from '../models';
import { parseSpeciesList } from '../helpers';

const url = 'https://swapi.dev/api/species' as const;

@Injectable({
  providedIn: 'root',
})
export class SpeciesService {
  get(arg0: any): any {
    throw new Error('Method not implemented.');
  }
  private readonly http = inject(HttpClient);

  getAll(params?: SearchData): Observable<List<Species>> {
    return this.http
      .get<RawList<RawSpecies>>(url, { params: params })
      .pipe(map(parseSpeciesList));
  }
}
