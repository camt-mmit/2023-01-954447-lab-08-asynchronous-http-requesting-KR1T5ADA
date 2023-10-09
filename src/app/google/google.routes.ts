import { Routes } from '@angular/router';
import { GooglePageComponent } from './pages/google-page/google-page.component';
import { AuthorizationPageComponent } from './pages/authorization-page/authorization-page.component';
import { RequireTokenPageComponent } from './pages/require-token-page/require-token-page.component';
import { EventListPageComponent } from './pages/events/event-list-page/event-list-page.component';
import { EventCreatePageComponent } from './pages/events/event-create-page/event-create-page.component';
import { ContactsListPageComponent } from './pages/contacts/contacts-list-page/contacts-list-page.component';
import { ContactsCreatePageComponent } from './pages/contacts/contacts-create-page/contacts-create-page.component';

export const routes: Routes = [
  {
    path: '',
    component: GooglePageComponent,
    children: [
      { path: '', redirectTo: 'events', pathMatch: 'full' },
      { path: 'authorization', component: AuthorizationPageComponent },
      {
        path: '',
        component: RequireTokenPageComponent,
        children: [
          {
            path: 'events',
            children: [
              { path: '', component: EventListPageComponent },
              { path: 'create', component: EventCreatePageComponent },
            ],
          },
        ],
      },
      {
        path: '',
        component: RequireTokenPageComponent,
        children: [
          {
            path: 'contacts',
            children: [
              { path: '', component: ContactsListPageComponent },
              { path: 'create', component: ContactsCreatePageComponent },
            ],
          },
        ],
      },
    ],
  },
];
