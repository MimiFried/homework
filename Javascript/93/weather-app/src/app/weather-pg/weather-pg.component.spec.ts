import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherPgComponent } from './weather-pg.component';

describe('WeatherPgComponent', () => {
  let component: WeatherPgComponent;
  let fixture: ComponentFixture<WeatherPgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WeatherPgComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherPgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
