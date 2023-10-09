import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsList, displayEventTimeRange } from '../../models';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-events-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatListModule,
    RouterLinkActive,
    MatButtonModule,
  ],
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss'],
})
export class EventsListComponent {
  @Input({ required: true }) data!: EventsList;

  protected readonly displayEventTimeRange = displayEventTimeRange;
}
