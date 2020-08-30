import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StanzaComponent } from './stanza.component';

describe('StanzaComponent', () => {
  let component: StanzaComponent;
  let fixture: ComponentFixture<StanzaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StanzaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StanzaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
