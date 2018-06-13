import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TraderProductsComponent } from './trader-products.component';

describe('TraderProductsComponent', () => {
  let component: TraderProductsComponent;
  let fixture: ComponentFixture<TraderProductsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TraderProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TraderProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
