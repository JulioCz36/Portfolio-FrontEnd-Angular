import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasProyectosComponent } from './cartas-proyectos.component';

describe('CartasProyectosComponent', () => {
  let component: CartasProyectosComponent;
  let fixture: ComponentFixture<CartasProyectosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasProyectosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartasProyectosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
