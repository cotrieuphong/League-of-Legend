import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SumDetailComponent } from './sum-detail.component';

describe('SumDetailComponent', () => {
  let component: SumDetailComponent;
  let fixture: ComponentFixture<SumDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SumDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SumDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
