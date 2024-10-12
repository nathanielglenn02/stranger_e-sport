import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PlayserviceService, Game } from '../../playservice.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})

export class GamesPage implements OnInit {

  games: Game[] = [];
  index: number = 0;


  constructor(
    private router: Router,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    this.games = this.playservice.games;
  }

}