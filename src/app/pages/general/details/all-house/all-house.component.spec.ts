import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllHouseComponent } from './all-house.component';

describe('AllHouseComponent', () => {
  let component: AllHouseComponent;
  let fixture: ComponentFixture<AllHouseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllHouseComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllHouseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
