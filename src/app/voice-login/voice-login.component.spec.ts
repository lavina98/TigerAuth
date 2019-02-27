import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceLoginComponent } from './voice-login.component';

describe('VoiceLoginComponent', () => {
  let component: VoiceLoginComponent;
  let fixture: ComponentFixture<VoiceLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
