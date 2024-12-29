import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Team, Member } from '../../../../playservice.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {
  idteam: number = 0;
  team: Team | undefined;
  members: Member[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService,
    private location: Location
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idteam = +params['idteam'];
      this.fetchTeamData();
    });
  }

  fetchTeamData() {
    this.isLoading = true;
    this.playservice.getTeamMembers(this.idteam).subscribe(response => {
      console.log('Team Members API Response:', response);

      if (response.result === 'OK') {
        this.team = response.team;
        this.members = response.members;
      } else {
        this.errorMessage = response.message;
      }

      this.isLoading = false;
    }, error => {
      console.error('Error fetching team members:', error);
      this.errorMessage = 'Failed to fetch team members.';
      this.isLoading = false;
    });
  }
  goBack() {
    this.location.back();
  }
}
