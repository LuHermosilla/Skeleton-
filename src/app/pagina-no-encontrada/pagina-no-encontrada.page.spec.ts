import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaginaNoEncontradaPage } from './pagina-no-encontrada.page';

describe('PaginaNoEncontradaPage', () => {
  let component: PaginaNoEncontradaPage;
  let fixture: ComponentFixture<PaginaNoEncontradaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNoEncontradaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
