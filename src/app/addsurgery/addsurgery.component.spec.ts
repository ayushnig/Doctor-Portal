import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsurgeryComponent } from './addsurgery.component';

describe('AddsurgeryComponent', () => {
  let component: AddsurgeryComponent;
  let fixture: ComponentFixture<AddsurgeryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsurgeryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsurgeryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
