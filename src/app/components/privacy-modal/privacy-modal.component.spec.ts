import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrivacyModalComponent } from './privacy-modal.component';

describe('PrivacyModalComponent', () => {
  let component: PrivacyModalComponent;
  let fixture: ComponentFixture<PrivacyModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PrivacyModalComponent]
    });
    fixture = TestBed.createComponent(PrivacyModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
