import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalheatComponent } from './totalheat.component';

describe('TotalheatComponent', () => {
  let component: TotalheatComponent;
  let fixture: ComponentFixture<TotalheatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotalheatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TotalheatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
