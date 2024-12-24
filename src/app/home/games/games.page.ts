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
    this.playservice.getGames().subscribe(response => {
      if (response.result === 'OK') {
        this.games = response.data.map((game: Game) => ({
          ...game,
          image: this.getImagePath(game.name)
        }));

        this.games.forEach(game => {
          this.playservice.getFullGameData(game.idgame).subscribe(details => {
            if (details.teams.result === 'OK') {
              game.teams = details.teams.data;
            }
            if (details.achievements.result === 'OK') {
              game.achievements = details.achievements.data;
            }
          });
        });
      }
    });
  }


  getImagePath(name: string): string {
    const images: { [key: string]: string } = {
      'Mobile Legends': 'assets/img/game/ml.jpg',
      'PUBG': 'assets/img/game/pubg.jpg',
      'Valorant': 'assets/img/game/valorant.jpg',
      'Clash of Clans': 'assets/img/game/coc.jpg',
      'Honor of Kings': 'assets/img/game/hok.jpg'
    };
    return images[name] || 'assets/img/game/default.jpg';
  }
}
