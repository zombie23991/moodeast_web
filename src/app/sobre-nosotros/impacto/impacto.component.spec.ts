import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImpactoComponent } from './impacto.component';

describe('ImpactoComponent', () => {
  let component: ImpactoComponent;
  let fixture: ComponentFixture<ImpactoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ImpactoComponent]
    });
    fixture = TestBed.createComponent(ImpactoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
