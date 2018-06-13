import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityPlanningProcurementComponent } from './commodity-planning-procurement.component';

describe('CommodityPlanningProcurementComponent', () => {
  let component: CommodityPlanningProcurementComponent;
  let fixture: ComponentFixture<CommodityPlanningProcurementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityPlanningProcurementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityPlanningProcurementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
