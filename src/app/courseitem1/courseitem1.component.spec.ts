import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseitem1Component } from './courseitem1.component';

describe('Courseitem1Component', () => {
  let component: Courseitem1Component;
  let fixture: ComponentFixture<Courseitem1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courseitem1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Courseitem1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
