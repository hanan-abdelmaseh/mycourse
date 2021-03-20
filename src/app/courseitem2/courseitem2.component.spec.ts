import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Courseitem2Component } from './courseitem2.component';

describe('Courseitem2Component', () => {
  let component: Courseitem2Component;
  let fixture: ComponentFixture<Courseitem2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Courseitem2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Courseitem2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
