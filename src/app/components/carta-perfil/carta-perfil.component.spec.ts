import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaPerfilComponent } from './carta-perfil.component';

describe('CartaPerfilComponent', () => {
  let component: CartaPerfilComponent;
  let fixture: ComponentFixture<CartaPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartaPerfilComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartaPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
