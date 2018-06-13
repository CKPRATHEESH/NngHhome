import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommodityAnalyticsCloudComponent } from './commodity-analytics-cloud.component';

describe('CommodityAnalyticsCloudComponent', () => {
  let component: CommodityAnalyticsCloudComponent;
  let fixture: ComponentFixture<CommodityAnalyticsCloudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommodityAnalyticsCloudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommodityAnalyticsCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
