import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesBarcosComponent } from './detalles-barcos.component';

describe('DetallesBarcosComponent', () => {
  let component: DetallesBarcosComponent;
  let fixture: ComponentFixture<DetallesBarcosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesBarcosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetallesBarcosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
