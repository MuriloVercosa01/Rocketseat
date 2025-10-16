import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventBindig } from './event-bindig';

describe('EventBindig', () => {
  let component: EventBindig;
  let fixture: ComponentFixture<EventBindig>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventBindig]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventBindig);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
