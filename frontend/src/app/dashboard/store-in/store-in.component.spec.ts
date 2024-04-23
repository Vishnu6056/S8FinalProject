import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreInComponent } from './store-in.component';

describe('StoreInComponent', () => {
  let component: StoreInComponent;
  let fixture: ComponentFixture<StoreInComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreInComponent]
    });
    fixture = TestBed.createComponent(StoreInComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
