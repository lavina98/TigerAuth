import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiceRegisterComponent } from './voice-register.component';

describe('VoiceRegisterComponent', () => {
  let component: VoiceRegisterComponent;
  let fixture: ComponentFixture<VoiceRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoiceRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiceRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
