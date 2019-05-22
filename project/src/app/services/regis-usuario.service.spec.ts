import { TestBed, inject } from '@angular/core/testing';

import { RegisUsuarioService } from './regis-usuario.service';

describe('RegisUsuarioService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisUsuarioService]
    });
  });

  it('should be created', inject([RegisUsuarioService], (service: RegisUsuarioService) => {
    expect(service).toBeTruthy();
  }));
});
