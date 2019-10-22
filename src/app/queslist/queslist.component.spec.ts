import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueslistComponent } from './queslist.component';

describe('QueslistComponent', () => {
  let component: QueslistComponent;
  let fixture: ComponentFixture<QueslistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueslistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueslistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
