import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CorpofficeComponent } from './corpoffice.component';

describe('CorpofficeComponent', () => {
  let component: CorpofficeComponent;
  let fixture: ComponentFixture<CorpofficeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CorpofficeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CorpofficeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
