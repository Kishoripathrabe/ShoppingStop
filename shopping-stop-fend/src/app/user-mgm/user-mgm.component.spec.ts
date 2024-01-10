import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMgmComponent } from './user-mgm.component';

describe('UserMgmComponent', () => {
  let component: UserMgmComponent;
  let fixture: ComponentFixture<UserMgmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserMgmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserMgmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
