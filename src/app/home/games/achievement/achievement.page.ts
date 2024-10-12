import { Component, OnInit } from '@angular/core';
import { PlayserviceService, Game} from '../../../playservice.service';
import { ActivatedRoute  } from '@angular/router' ;

@Component({
  selector: 'app-achievement',
  templateUrl: './achievement.page.html',
  styleUrls: ['./achievement.page.scss'],
})
export class AchievementPage implements OnInit {

  games:Game[]= [];
  index:number = 0;
  
  selectedGame : Game | undefined;
  constructor(private route: ActivatedRoute, private playService: PlayserviceService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['index']
    })
    this.games = this.playService.games;

    this.selectedGame = this.games[this.index];
  }

}
