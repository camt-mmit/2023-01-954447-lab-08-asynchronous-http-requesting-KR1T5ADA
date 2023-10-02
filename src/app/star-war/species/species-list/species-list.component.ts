import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { List, Species, SearchData } from '../../models';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-people-list',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './species-list.component.html',
  styleUrls: ['./species-list.component.scss'],
})
export class SpeciesListComponent {
  private readonly fb = inject(FormBuilder).nonNullable;

  protected readonly formGroup = this.fb.group({
    search: [
      '',
      {
        updateOn: 'submit',
      },
    ],
    page: [''],
  });

  @Input({ required: true }) data!: List<Species>;

  @Input() set searchData(searchData: SearchData) {
    this.formGroup.setValue({
      search: '',
      page: '',
      ...searchData,
    });
  }

  @Output() readonly searchDataChange = new EventEmitter<SearchData>();

  private emitSearchData(): void {
    const value = this.formGroup.value;

    this.searchDataChange.emit({
      ...(value.search ? { search: value.search } : null),
      ...(value.page && value.page !== '1' ? { page: value.page } : null),
    });
  }

  protected doSearchDataChange(): void {
    this.formGroup.controls.page.setValue('');
    this.emitSearchData();
  }

  protected get pages(): number {
    return Math.ceil(this.data.count / 10);
  }

  protected doPageChange(url: URL | null): void {
    if (url === null) {
      return;
    }

    this.formGroup.controls.page.setValue(url.searchParams.get('page') ?? '');
    this.emitSearchData();
  }
}
