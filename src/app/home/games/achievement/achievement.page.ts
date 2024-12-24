import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Game, Achievement } from '../../../playservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  // Variabel
  selectedYear: number | 'All' = 'All';
  selectedGame: Game | undefined;
  arrayAchievement: Achievement[] = [];
  distinctYears: string[] = [];
  idgame: number = 0;
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private playService: PlayserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame'];
      this.fetchAchievements();
      this.fetchGameDetails();
    });
  }

  fetchAchievements() {
    this.playService.getAchievements(this.idgame).subscribe(response => {
      if (response.result === 'OK') {
        this.arrayAchievement = response.data || [];
        this.distinctYears = this.getDistinctYears();
      } else {
        this.arrayAchievement = [];
        this.errorMessage = 'No achievements available.';
      }
      this.isLoading = false;
    },
      error => {
        console.error('Error fetching achievements:', error);
        this.errorMessage = 'Failed to load achievements.';
        this.isLoading = false;
      }
    );
  }

  fetchGameDetails() {
    this.playService.getGames().subscribe(
      response => {
        if (response.result === 'OK') {
          this.selectedGame = response.data.find((game: Game) => game.idgame === this.idgame);
        }
      },
      error => {
        console.error('Error fetching game details:', error);
        this.selectedGame = undefined;
      }
    );
  }

  getDistinctYears(): string[] {
    const years = this.arrayAchievement.map(achievement => achievement.year);
    return Array.from(new Set(years));
  }

  getFilteredAchievements(): Achievement[] {
    if (this.selectedYear === 'All') {
      return this.arrayAchievement;
    }
    return this.arrayAchievement.filter(achievement => achievement.year === this.selectedYear);
  }
}
