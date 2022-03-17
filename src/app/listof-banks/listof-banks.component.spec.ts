import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofBanksComponent } from './listof-banks.component';

describe('ListofBanksComponent', () => {
  let component: ListofBanksComponent;
  let fixture: ComponentFixture<ListofBanksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofBanksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofBanksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
