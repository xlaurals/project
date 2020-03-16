import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectreasonsComponent } from './projectreasons.component';

describe('ProjectreasonsComponent', () => {
  let component: ProjectreasonsComponent;
  let fixture: ComponentFixture<ProjectreasonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectreasonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectreasonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
