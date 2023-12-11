import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PsicologosComponent } from './psicologos.component';

describe('PsicologosComponent', () => {
  let component: PsicologosComponent;
  let fixture: ComponentFixture<PsicologosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PsicologosComponent]
    });
    fixture = TestBed.createComponent(PsicologosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
