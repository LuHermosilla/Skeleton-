import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { validacionGuard } from './validacion.guard';

describe('validacionGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => validacionGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
