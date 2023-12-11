import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyMoodeastComponent } from './why-moodeast.component';

describe('WhyMoodeastComponent', () => {
  let component: WhyMoodeastComponent;
  let fixture: ComponentFixture<WhyMoodeastComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WhyMoodeastComponent]
    });
    fixture = TestBed.createComponent(WhyMoodeastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
