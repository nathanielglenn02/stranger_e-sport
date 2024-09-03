import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeamMemberPage } from './team-member.page';

describe('TeamMemberPage', () => {
  let component: TeamMemberPage;
  let fixture: ComponentFixture<TeamMemberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamMemberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
