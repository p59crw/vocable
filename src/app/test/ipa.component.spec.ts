import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpaComponent } from './ipa.component';

describe('IpaComponent', () => {
  let component: IpaComponent;
  let fixture: ComponentFixture<IpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [IpaComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
