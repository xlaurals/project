import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitDashboardComponent } from './kit-dashboard.component';

describe('KitDashboardComponent', () => {
  let component: KitDashboardComponent;
  let fixture: ComponentFixture<KitDashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitDashboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
