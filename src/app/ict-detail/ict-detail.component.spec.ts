import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IctDetailComponent } from './ict-detail.component';

describe('IctDetailComponent', () => {
  let component: IctDetailComponent;
  let fixture: ComponentFixture<IctDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IctDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IctDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
