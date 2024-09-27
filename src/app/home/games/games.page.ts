import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Game {
  id: number;
  name: string;
  image: string;
}

@Component({
  selector: 'app-games',
  templateUrl: './games.page.html',
  styleUrls: ['./games.page.scss'],
})

export class GamesPage implements OnInit {
  
  games: Game[] = [
    {
      id: 1,
      name: 'Mobile Legends',
      image: 'assets/img/game/ml.jpg',
    },
    {
      id: 2,
      name: 'PUBG',
      image: 'assets/img/game/pubg.jpg',
    },
    {
      id: 3,
      name: 'Valorant',
      image: 'assets/img/game/valorant.jpg',
    },
    {
      id: 4,
      name: 'Clash of Clans',
      image: 'assets/img/game/coc.jpg',
    },
    {
      id: 5,
      name: 'Honor of Kings',
      image: 'assets/img/game/hok.jpg',
    },
  ];

  constructor(private router: Router) { }

  ngOnInit() { }

  viewAchievements(game: Game) {
    this.router.navigate(['/achievements', game.id]);
  }

  viewTeams(game: Game) {
    this.router.navigate(['/teams', game.id]);
  }
}