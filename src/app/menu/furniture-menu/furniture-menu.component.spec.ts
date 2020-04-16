import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FurnitureMenuComponent } from './furniture-menu.component';

describe('FurnitureMenuComponent', () => {
  let component: FurnitureMenuComponent;
  let fixture: ComponentFixture<FurnitureMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FurnitureMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FurnitureMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
