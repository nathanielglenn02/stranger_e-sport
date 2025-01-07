import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Game, Achievement } from '../../../playservice.service';

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  selectedYear: number | 'All' = 'All';
  selectedGame: Game | undefined;
  arrayAchievement: Achievement[] = [];
  distinctYears: string[] = [];
  idgame: number = 0;
  isLoading: boolean = true;
  errorMessage: string = '';
  imgPath: string = 'assets/img/game/default.jpg';


  constructor(
    private route: ActivatedRoute,
    private playService: PlayserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame'];
      console.log('ID Game:', this.idgame);
      if (isNaN(this.idgame) || this.idgame <= 0) {
        console.error('ID Game tidak valid:', this.idgame);
        this.errorMessage = 'Invalid Game ID.';
        this.isLoading = false;
        return;
      }
      this.fetchAchievements();
      // this.fetchGameDetails();
    });
  }

  ionViewWillEnter() {
    this.fetchAchievements();
    // this.fetchGameDetails();
  }

  fetchAchievements() {
    console.log('Fetching achievements for idgame:', this.idgame);
    this.playService.getAchievements(this.idgame).subscribe(
      response => {
        console.log('API Response:', response);
        if (response.result === 'OK' && response.data.length > 0) {
          this.arrayAchievement = response.data || [];
          this.distinctYears = this.getDistinctYears();
          this.imgPath = this.arrayAchievement[0]?.imgPath || 'assets/img/game/default.jpg';
          this.errorMessage = '';
        } else {
          this.arrayAchievement = [];
          this.errorMessage = 'No achievements available.';
        }
        console.log('Achievements:', this.arrayAchievement);
        console.log('Distinct Years:', this.distinctYears);
        console.log('Image Path:', this.imgPath);
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching achievements:', error);
        this.errorMessage = 'Failed to load achievements.';
        this.isLoading = false;
      }
    );
  }

  // fetchGameDetails() {
  //   this.playService.getGames().subscribe(
  //     response => {
  //       console.log('Game Response:', response);
  //       if (response.result === 'OK') {
  //         this.selectedGame = response.data.find(
  //           (game: Game) => Number(game.idgame) === this.idgame
  //         );
  //         console.log('Selected Game:', this.selectedGame);
  //       }
  //     },
  //     error => {
  //       console.error('Error fetching game details:', error);
  //       this.selectedGame = undefined;
  //     }
  //   );
  // }

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
