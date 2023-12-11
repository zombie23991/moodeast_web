import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestroEquipoComponent } from './nuestro-equipo.component';

describe('NuestroEquipoComponent', () => {
  let component: NuestroEquipoComponent;
  let fixture: ComponentFixture<NuestroEquipoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestroEquipoComponent]
    });
    fixture = TestBed.createComponent(NuestroEquipoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
