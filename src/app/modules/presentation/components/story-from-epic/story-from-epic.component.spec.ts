import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoryFromEpicComponent } from './story-from-epic.component';

describe('StoryFromEpicComponent', () => {
  let component: StoryFromEpicComponent;
  let fixture: ComponentFixture<StoryFromEpicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StoryFromEpicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StoryFromEpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
