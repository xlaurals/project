import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InProjectComponent } from './in-project.component';

describe('InProjectComponent', () => {
  let component: InProjectComponent;
  let fixture: ComponentFixture<InProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
