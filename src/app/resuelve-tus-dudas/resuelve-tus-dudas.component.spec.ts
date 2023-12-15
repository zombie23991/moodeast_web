import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResuelveTusDudasComponent } from './resuelve-tus-dudas.component';

describe('ResuelveTusDudasComponent', () => {
  let component: ResuelveTusDudasComponent;
  let fixture: ComponentFixture<ResuelveTusDudasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResuelveTusDudasComponent]
    });
    fixture = TestBed.createComponent(ResuelveTusDudasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
