import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NuestrasBasesComponent } from './nuestras-bases.component';

describe('NuestrasBasesComponent', () => {
  let component: NuestrasBasesComponent;
  let fixture: ComponentFixture<NuestrasBasesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NuestrasBasesComponent]
    });
    fixture = TestBed.createComponent(NuestrasBasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
