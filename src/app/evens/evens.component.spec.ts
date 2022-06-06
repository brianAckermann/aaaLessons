import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvensComponent } from './evens.component';

describe('EvensComponent', () => {
  let component: EvensComponent;
  let fixture: ComponentFixture<EvensComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvensComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
