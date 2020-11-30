import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatalogoCategoriaComponent } from './catalogo-categoria.component';

describe('CatalogoCategoriaComponent', () => {
  let component: CatalogoCategoriaComponent;
  let fixture: ComponentFixture<CatalogoCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatalogoCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatalogoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
