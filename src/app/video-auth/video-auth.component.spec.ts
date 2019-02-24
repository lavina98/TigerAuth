import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoAuthComponent } from './video-auth.component';

describe('VideoAuthComponent', () => {
  let component: VideoAuthComponent;
  let fixture: ComponentFixture<VideoAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VideoAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
