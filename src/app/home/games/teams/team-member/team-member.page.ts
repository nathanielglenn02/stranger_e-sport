import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Game, Member, Team, Achievement } from '../../../../playservice.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {

  games: Game[] = [];
  selectedTeam: Team | undefined;
  gameIndex: number = 0;
  teamIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameIndex = +params['gameIndex'];
      this.teamIndex = +params['teamIndex'];
    });

    this.games = this.playservice.games;
    this.selectedTeam = this.games[this.gameIndex]?.teams[this.teamIndex];
  }

}
