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
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    this.fetchGames();
  }

  fetchGames() {
    this.playservice.getGames().subscribe(response => {
      console.log('API Response:', response); // Debugging
      if (response.result === 'OK') {
        // Gunakan imgPath langsung dari database
        this.games = response.data;
        console.log('Games:', this.games); // Debugging
        this.isLoading = false;
      } else {
        this.errorMessage = 'No games available.';
        this.isLoading = false;
      }
    },
      error => {
        console.error('Error fetching games:', error);
        this.errorMessage = 'Failed to load games.';
        this.isLoading = false;
      });
  }
}
