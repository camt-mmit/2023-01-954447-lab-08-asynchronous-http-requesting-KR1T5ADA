import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Person } from '../../models';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-person-view',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss'],
})
export class PersonViewComponent {
  @Input({ required: true }) data!: Person;
}
