import { Routes } from '@angular/router';
import { StarWarPageComponent } from './pages/star-war-page/star-war-page.component';
import { PeopleListPageComponent } from './pages/people/people-list-page/people-list-page.component';
import { SpeciesListPageComponent } from './pages/species/species-list-page/species-list-page.component';
import { PlaneteListPageComponent } from './pages/planet/planet-list-page/planet-list-page.component';
import { PersonViewPageComponent } from './pages/people/person-view-page/person-view-page.component';
import { PlanetViewComponent } from './planet/planet-view/planet-view.component';

export const routes: Routes = [
  {
    path: '',
    component: StarWarPageComponent,
    children: [
      { path: '', redirectTo: 'people', pathMatch: 'full' },
      { path: 'people', component: PeopleListPageComponent },
      { path: 'people/:id', component: PersonViewPageComponent },
      { path: 'species', component: SpeciesListPageComponent },
      { path: 'planet', component: PlaneteListPageComponent },
      { path: 'planet/:id', component: PlanetViewComponent },
    ],
  },
];
