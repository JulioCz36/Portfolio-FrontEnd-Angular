import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CartasSkillsComponent } from './cartas-skills.component';

describe('CartasSkillsComponent', () => {
  let component: CartasSkillsComponent;
  let fixture: ComponentFixture<CartasSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CartasSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CartasSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
