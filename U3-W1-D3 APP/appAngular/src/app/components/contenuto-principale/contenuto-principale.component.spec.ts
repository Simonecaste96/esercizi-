import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenutoPrincipaleComponent } from './contenuto-principale.component';

describe('ContenutoPrincipaleComponent', () => {
  let component: ContenutoPrincipaleComponent;
  let fixture: ComponentFixture<ContenutoPrincipaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContenutoPrincipaleComponent]
    });
    fixture = TestBed.createComponent(ContenutoPrincipaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
