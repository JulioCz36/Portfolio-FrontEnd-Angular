import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparacionComponent } from './separacion.component';

describe('SeparacionComponent', () => {
  let component: SeparacionComponent;
  let fixture: ComponentFixture<SeparacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeparacionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
