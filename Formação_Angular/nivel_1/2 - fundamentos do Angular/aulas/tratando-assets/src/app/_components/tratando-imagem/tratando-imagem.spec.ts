import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratandoImagem } from './tratando-imagem';

describe('TratandoImagem', () => {
  let component: TratandoImagem;
  let fixture: ComponentFixture<TratandoImagem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TratandoImagem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TratandoImagem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
