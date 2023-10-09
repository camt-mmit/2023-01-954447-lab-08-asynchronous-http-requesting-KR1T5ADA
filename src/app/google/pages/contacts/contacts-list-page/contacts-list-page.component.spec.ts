import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListPageComponent } from './contacts-list-page.component';

describe('ContactsListPageComponent', () => {
  let component: ContactsListPageComponent;
  let fixture: ComponentFixture<ContactsListPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactsListPageComponent]
    });
    fixture = TestBed.createComponent(ContactsListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
