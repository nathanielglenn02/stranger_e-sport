import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Team } from '../../../playservice.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.page.html',
  styleUrls: ['./teams.page.scss'],
})
export class TeamsPage implements OnInit {

  idgame: number = 0;
  teams: Team[] = [];

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame'];
    });

    this.playservice.getTeams(this.idgame).subscribe(response => {
      if (response.result === 'OK') {
        this.teams = response.data || [];
      } else {
        this.teams = [];
      }
    });
  }
}
