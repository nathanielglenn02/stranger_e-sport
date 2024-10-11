import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayserviceService, Game, Member, Team, Achievement } from '../../playservice.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})

export class GamesPage implements OnInit {

  games: Game[] = [];

  constructor(
    private router: Router,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    this.games = this.playservice.games;
  }

  viewAchievements(game: Game) {
    this.router.navigate(['/achievements', game.id]);
  }

  viewTeams(game: Game) {
    this.router.navigate(['/teams', game.id]);
  }
}