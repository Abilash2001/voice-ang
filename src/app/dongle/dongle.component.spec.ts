import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DongleComponent } from './dongle.component';

describe('DongleComponent', () => {
  let component: DongleComponent;
  let fixture: ComponentFixture<DongleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DongleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DongleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
