import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgsnSoftsComponent } from './agsn-softs.component';

describe('AgsnSoftsComponent', () => {
  let component: AgsnSoftsComponent;
  let fixture: ComponentFixture<AgsnSoftsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgsnSoftsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgsnSoftsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
