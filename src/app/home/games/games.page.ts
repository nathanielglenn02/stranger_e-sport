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
      name: 'League of Legends',
      image: 'assets/img/league-of-legends.jpg',
    },
    {
      id: 2,
      name: 'Dota 2',
      image: 'assets/img/dota-2.jpg',
    },
    {
      id: 3,
      name: 'Valorant',
      image: 'assets/img/valorant.jpg',
    },
    // Tambahkan permainan lainnya sesuai kebutuhan
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
