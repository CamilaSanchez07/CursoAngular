import { TestBed } from '@angular/core/testing';

import { EmpleadoosService } from './empleadoos.service';

describe('EmpleadoosService', () => {
  let service: EmpleadoosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleadoosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
