import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventFormComponent } from 'src/app/google/events/event-form/event-form.component';
import { EventsService } from 'src/app/google/services/events.service';
import { EventFormData } from 'src/app/google/models';
import { take } from 'rxjs';

@Component({
  selector: 'app-event-create-page',
  standalone: true,
  imports: [CommonModule, EventFormComponent],
  templateUrl: './event-create-page.component.html',
  styleUrls: ['./event-create-page.component.scss'],
})
export class EventCreatePageComponent {
  private readonly eventsService = inject(EventsService);

  protected onDataChange(eventFormData: EventFormData): void {
    this.eventsService
      .create(eventFormData)
      .pipe(take(1))
      .subscribe(() => {
        history.back();
      });
  }
}
