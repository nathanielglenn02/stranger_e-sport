import { Component, OnInit } from '@angular/core';
import { PlayserviceService, Game, Member, Team, Achievement } from '../../../playservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  games: Game[] = [];
  constructor(private playservice: PlayserviceService) { }

  ngOnInit() {
    this.games = this.playservice.games;
  }

}
