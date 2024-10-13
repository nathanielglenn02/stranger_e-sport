import { Component, OnInit } from '@angular/core';
import { PlayserviceService, Game, Achievement } from '../../../playservice.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  selectedYear: number | 'All' = 'All';  // Hold the selected year or 'All' for no filter
  games: Game[] = [];
  index: number = 0;
  selectedGame: Game | undefined
  arrayAchievement: Achievement[] = [];

  distinctYears: string[] = [];

  constructor(private route: ActivatedRoute, private playService: PlayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['index']
    })
    this.games = this.playService.games;
    this.selectedGame = this.games[this.index];
    this.arrayAchievement = this.selectedGame.achievements;
    this.distinctYears = this.getDistinctYears();
  }


  // Generate distinct years from achievements
  getDistinctYears(): string[] {
    const years = this.arrayAchievement.map(achievement => achievement.year);
    return Array.from(new Set(years));  // Use Set to remove duplicates
  }

  // Function to get the filtered achievements based on the selected year
  getFilteredAchievements(): Achievement[] {
    if (this.selectedYear === 'All') {
      return this.arrayAchievement;
    }
    return this.arrayAchievement.filter(achievement => achievement.year === this.selectedYear);
  }
}
