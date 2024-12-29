import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Team } from '../../../playservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  // Variabel
  idgame: number = 0;
  teams: Team[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame'];
      console.log('ID Game:', this.idgame);
      if (isNaN(this.idgame) || this.idgame <= 0) {
        this.errorMessage = 'Invalid Game ID.';
        this.isLoading = false;
      } else {
        this.fetchTeams();
      }
    });
  }

  fetchTeams() {
    console.log('Fetching teams for idgame:', this.idgame);
    this.isLoading = true;
    this.playservice.getTeams(this.idgame).subscribe(
      response => {
        console.log('API Response:', response);

        if (response.result === 'OK' && response.data.length > 0) {
          this.teams = response.data.map((team: Team) => ({
            ...team,
            imgPath: team.imgPath || 'assets/img/team/default.jpg'
          }));
          console.log('Processed Teams:', this.teams);
          this.errorMessage = '';
        } else {
          this.teams = [];
          this.errorMessage = 'No teams available.';
        }
        this.isLoading = false;
      },
      error => {
        console.error('Error fetching teams:', error);
        this.errorMessage = 'Failed to load teams.';
        this.teams = [];
        this.isLoading = false;
      }
    );
  }
}
