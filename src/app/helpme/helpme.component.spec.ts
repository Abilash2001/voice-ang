import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpmeComponent } from './helpme.component';

describe('HelpmeComponent', () => {
  let component: HelpmeComponent;
  let fixture: ComponentFixture<HelpmeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpmeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HelpmeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
