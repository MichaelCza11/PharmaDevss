import { TestBed } from '@angular/core/testing';

import { DetalleFacVentaService } from './detalle-fac-venta';

describe('DetalleFacVentaService', () => {
  let service: DetalleFacVentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetalleFacVentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
