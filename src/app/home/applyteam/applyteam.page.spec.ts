import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ApplyteamPage } from './applyteam.page';

describe('ApplyteamPage', () => {
  let component: ApplyteamPage;
  let fixture: ComponentFixture<ApplyteamPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplyteamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
