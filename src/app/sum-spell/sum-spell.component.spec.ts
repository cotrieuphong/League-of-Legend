import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumSpellComponent } from './sum-spell.component';

describe('SumSpellComponent', () => {
  let component: SumSpellComponent;
  let fixture: ComponentFixture<SumSpellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumSpellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumSpellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
