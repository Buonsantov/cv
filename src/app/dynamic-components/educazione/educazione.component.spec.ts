import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EducazioneComponent } from './educazione.component';

describe('EducazioneComponent', () => {
  let component: EducazioneComponent;
  let fixture: ComponentFixture<EducazioneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EducazioneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
