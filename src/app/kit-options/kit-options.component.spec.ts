import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitOptionsComponent } from './kit-options.component';

describe('KitOptionsComponent', () => {
  let component: KitOptionsComponent;
  let fixture: ComponentFixture<KitOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
