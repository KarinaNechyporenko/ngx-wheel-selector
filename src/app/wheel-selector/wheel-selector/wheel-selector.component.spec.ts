import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WheelSelectorComponent } from './wheel-selector.component';

describe('WheelSelectorComponent', () => {
  let component: WheelSelectorComponent;
  let fixture: ComponentFixture<WheelSelectorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WheelSelectorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WheelSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
