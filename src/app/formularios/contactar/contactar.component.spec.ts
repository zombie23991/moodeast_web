import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactarComponent } from './contactar.component';

describe('ContactarComponent', () => {
  let component: ContactarComponent;
  let fixture: ComponentFixture<ContactarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContactarComponent]
    });
    fixture = TestBed.createComponent(ContactarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
