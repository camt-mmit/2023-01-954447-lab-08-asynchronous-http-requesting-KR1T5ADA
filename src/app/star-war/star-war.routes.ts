import { Routes } from '@angular/router';
import { StarWarPageComponent } from './pages/star-war-page/star-war-page.component';
import { PeopleListPageComponent } from './pages/people/people-list-page/people-list-page.component';
import { SpeciesListPageComponent } from './pages/species/species-list-page/species-list-page.component';
import { SpecieViewPageComponent } from './species/specie-view-page/specie-view-page.component';
import { PlanetListPageComponent } from './pages/planet/planet-list-page/planet-list-page.component';
import { PersonViewPageComponent } from './pages/people/person-view-page/person-view-page.component';
import { PlanetViewPageComponent } from './planet/planet-view-page/planet-view-page.component';

export const routes: Routes = [
  {
    path: '',
    component: StarWarPageComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'people/:id', component: PersonViewPageComponent },
      { path: 'species', component: SpeciesListPageComponent },
      { path: 'species/:id', component: SpecieViewPageComponent },
      { path: 'planet', component: PlanetListPageComponent },
      { path: 'planet/:id', component: PlanetViewPageComponent },
    ],
  },
];
