import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

export interface Member {
  username: string;
  role: string;
  imgPath: string;
}

export interface Team {
  idteam: number;
  name: string;
  imgPath: string;
  members?: Member[];
}

export interface Achievement {
  title: string;
  year: string;
  team: string;
  imgPath: string;
}

export interface Game {
  idgame: number;
  name: string;
  description: string;
  imgPath: string;
  teams?: Team[];
  achievements?: Achievement[];
}


@Injectable({
  providedIn: 'root'
})
export class PlayserviceService {

  baseUrl: string = 'https://ubaya.xyz/hybrid/160822004/project/';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(this.baseUrl + 'get_games.php');
  }

  getTeams(idgame: number): Observable<any> {
    console.log('Mengirim idgame ke API untuk Teams:', idgame);
    return this.http.post(this.baseUrl + 'get_teams.php', { idgame });
  }

  getAchievements(idgame: number): Observable<any> {
    console.log('Mengirim idgame ke API:', idgame);
    return this.http.post(this.baseUrl + 'get_achievements.php', { idgame });
  }

  getTeamMembers(idteam: number): Observable<any> {
    console.log('Mengirim idteam ke API:', idteam);
    return this.http.post(this.baseUrl + 'get_team_members.php', { idteam });
  }

  getFullGameData(idgame: number): Observable<any> {
    return forkJoin({
      teams: this.getTeams(idgame),
      achievements: this.getAchievements(idgame)
    });
  }
}
