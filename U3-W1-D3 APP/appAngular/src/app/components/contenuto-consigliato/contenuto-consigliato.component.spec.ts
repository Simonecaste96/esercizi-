import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenutoConsigliatoComponent } from './contenuto-consigliato.component';

describe('ContenutoConsigliatoComponent', () => {
  let component: ContenutoConsigliatoComponent;
  let fixture: ComponentFixture<ContenutoConsigliatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenutoConsigliatoComponent]
    });
    fixture = TestBed.createComponent(ContenutoConsigliatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
