import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EsperienzaComponent } from './esperienza.component';

describe('EsperienzaComponent', () => {
  let component: EsperienzaComponent;
  let fixture: ComponentFixture<EsperienzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EsperienzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EsperienzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
