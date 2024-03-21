import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentActivePostComponent } from './content-active-post.component';

describe('ContentActivePostComponent', () => {
  let component: ContentActivePostComponent;
  let fixture: ComponentFixture<ContentActivePostComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ContentActivePostComponent]
    });
    fixture = TestBed.createComponent(ContentActivePostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
