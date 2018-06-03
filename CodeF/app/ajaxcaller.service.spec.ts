import { TestBed, inject } from '@angular/core/testing';

import { AjaxcallerService } from './ajaxcaller.service';

describe('AjaxcallerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AjaxcallerService]
    });
  });

  it('should be created', inject([AjaxcallerService], (service: AjaxcallerService) => {
    expect(service).toBeTruthy();
  }));
});
