import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Game, Member, Team, Achievement } from '../../../playservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  games: Game[] = [];
  index: number = 0;
  selectedGame: Game | undefined;

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.index = params['index'];
    });

    this.games = this.playservice.games;
    this.selectedGame = this.games[this.index];
  }

}
