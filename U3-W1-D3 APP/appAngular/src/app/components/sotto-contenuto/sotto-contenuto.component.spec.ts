import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SottoContenutoComponent } from './sotto-contenuto.component';

describe('SottoContenutoComponent', () => {
  let component: SottoContenutoComponent;
  let fixture: ComponentFixture<SottoContenutoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SottoContenutoComponent]
    });
    fixture = TestBed.createComponent(SottoContenutoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
