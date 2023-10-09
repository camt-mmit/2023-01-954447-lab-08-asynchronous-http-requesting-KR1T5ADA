import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsCreatePageComponent } from './contacts-create-page.component';

describe('ContactsCreatePageComponent', () => {
  let component: ContactsCreatePageComponent;
  let fixture: ComponentFixture<ContactsCreatePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ContactsCreatePageComponent]
    });
    fixture = TestBed.createComponent(ContactsCreatePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
