import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorarSaludMentalComponent } from './mejorar-salud-mental.component';

describe('MejorarSaludMentalComponent', () => {
  let component: MejorarSaludMentalComponent;
  let fixture: ComponentFixture<MejorarSaludMentalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MejorarSaludMentalComponent]
    });
    fixture = TestBed.createComponent(MejorarSaludMentalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
