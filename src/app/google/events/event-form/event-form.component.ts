import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { EventFormData } from '../../models';

@Component({
  selector: 'app-event-form',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
  ],
  templateUrl: './event-form.component.html',
  styleUrls: ['./event-form.component.scss'],
})
export class EventFormComponent {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly formGroup = this.fb.group({
    summary: [
      'untitled',
      {
        updateOn: 'blur',
      },
    ],
    start: [
      new Date(),
      {
        updateOn: 'blur',
      },
    ],
    end: [
      new Date(),
      {
        updateOn: 'blur',
      },
    ],
  });

  @Output() readonly dataChange = new EventEmitter<EventFormData>();

  protected doSubmit(): void {
    if (this.formGroup.invalid) {
      return;
    }

    const formData = this.formGroup.getRawValue();

    const [startDate] = formData.start.toISOString().split('T');
    const [endDate] = formData.end.toISOString().split('T');

    console.debug(formData);

    this.dataChange.emit({
      summary: formData.summary,
      start: {
        date: startDate,
      },
      end: {
        date: endDate,
      },
    });
  }
}
