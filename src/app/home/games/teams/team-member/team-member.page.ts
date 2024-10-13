import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Game, Member, Team, Achievement } from '../../../../playservice.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {

  selectedGame: Game | undefined;
  selectedTeam: Team | undefined;
  gameIndex: number = 0;
  teamIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.gameIndex = params['gameIndex'];
      this.teamIndex = params['teamIndex'];
    });

    this.selectedGame = this.playservice.games[this.gameIndex];
    this.selectedTeam = this.selectedGame.teams[this.teamIndex];
  }
}
