import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratandoSvg } from './tratando-svg';

describe('TratandoSvg', () => {
  let component: TratandoSvg;
  let fixture: ComponentFixture<TratandoSvg>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratandoSvg]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratandoSvg);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
