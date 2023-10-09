import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ContactsService } from 'src/app/google/services/contacts.service';

@Component({
  selector: 'app-contacts-list-page',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './contacts-list-page.component.html',
  styleUrls: ['./contacts-list-page.component.scss'],
})
export class ContactsListPageComponent {
  private readonly eventsService = inject(ContactsService);

  protected readonly data$ = this.eventsService.getAll({
    singleEvents: true,
    orderBy: 'startTime',
    timeMin: new Date(Date.now() - 30 * 24 * 60 * 60 * 1_000).toISOString(),
  });
}
