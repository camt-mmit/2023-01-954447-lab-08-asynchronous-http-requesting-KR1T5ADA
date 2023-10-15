import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactsService } from 'src/app/google/services/contacts.service';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { ContactListComponent } from 'src/app/google/contacts/contacts-list/contacts-list.component';

@Component({
  selector: 'app-contact-list-page',
  standalone: true,
  templateUrl: './contacts-list-page.component.html',
  styleUrls: ['./contacts-list-page.component.scss'],
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatListModule,
    ContactListComponent,
  ],
})
export class ContactListPageComponent {
  private readonly contactsService = inject(ContactsService);

  protected readonly data$ = this.contactsService.getAll({
    personFields: 'names,photos,emailAddresses,phoneNumbers',
    sortOrder: 'FIRST_NAME_ASCENDING',
  });
}
