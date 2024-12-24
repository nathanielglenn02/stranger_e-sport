import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

export interface Member {
  nickname: string;
  role: string;
  avatar: string;
}

export interface Team {
  idteam: number; // Tambahkan ini
  name: string;
  image?: string; // Opsional untuk gambar
  members?: Member[]; // Opsional untuk anggota tim
}


export interface Achievement {
  title: string;
  year: string;
  team: string;
}

// BEFORE
// export interface Game {
//   name: string;
//   image: string;
//   teams: Team[];
//   achievements: Achievement[];
// }

export interface Game {
  idgame: number;
  name: string;
  description: string;
  image?: string; // Optional image
  teams?: Team[]; // Optional teams
  achievements?: Achievement[]; // Optional achievements
}


@Injectable({
  providedIn: 'root'
})
export class PlayserviceService {

  // games = [
  //   {
  //     name: 'Mobile Legends',
  //     image: 'assets/img/game/ml.jpg',
  //     teams: [
  //       {
  //         name: 'One Direction Team',
  //         image: 'assets/img/game/team/team_ml_1_all.png',
  //         members: [
  //           { nickname: 'StormRider', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_1_1.png' },
  //           { nickname: 'SkyWatcher', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_1_2.png' },
  //           { nickname: 'NightShade', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_1_3.png' },
  //           { nickname: 'IronFist', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_1_4.png' },
  //           { nickname: 'GhostWalker', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_1_5.png' },
  //         ]
  //       },
  //       {
  //         name: 'Day6 Team',
  //         image: 'assets/img/game/team/team_ml_2_all.png',
  //         members: [
  //           { nickname: 'ThunderBolt', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_2_1.png' },
  //           { nickname: 'AquaGuard', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_2_2.png' },
  //           { nickname: 'ShadowStalker', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_2_3.png' },
  //           { nickname: 'BlazeWing', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_2_4.png' },
  //           { nickname: 'StormChaser', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_2_5.png' },
  //         ]
  //       },
  //       {
  //         name: 'Black Pink Team',
  //         image: 'assets/img/game/team/team_ml_3_all.png',
  //         members: [
  //           { nickname: 'PhantomBlade', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_3_1.png' },
  //           { nickname: 'MoonShadow', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_3_2.png' },
  //           { nickname: 'SilverArrow', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_3_3.png' },
  //           { nickname: 'FrostGuard', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_3_4.png' },
  //           { nickname: 'SteelHeart', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_3_5.png' },
  //         ]
  //       },
  //     ],
  //     achievements: [
  //       { title: 'Champion League Winner', year: '2023', team: 'One Direction Team' },
  //       { title: 'Best Team Play', year: '2022', team: 'Day6 Team' },
  //       { title: 'Most Valuable Player', year: '2021', team: 'Day6 Team' },
  //       { title: 'International Invitational Champion', year: '2023', team: 'One Direction Team' },
  //       { title: 'National Grand Finals', year: '2022', team: 'Day6 Team' },
  //       { title: 'Regional Qualifiers Winner', year: '2021', team: 'Black Pink Team' }
  //     ]
  //   },
  //   {
  //     name: 'PUBG',
  //     image: 'assets/img/game/pubg.jpg',
  //     teams: [
  //       {
  //         name: 'TXT Team',
  //         image: 'assets/img/game/team/team_pubg_1_all.png',
  //         members: [
  //           { nickname: 'DeadEye', role: 'Sniper', avatar: 'assets/img/game/team/player/team_pubg_1_1.png' },
  //           { nickname: 'IronHawk', role: 'Support', avatar: 'assets/img/game/team/player/team_pubg_1_2.png' },
  //           { nickname: 'WarLord', role: 'Assault', avatar: 'assets/img/game/team/player/team_pubg_1_3.png' },
  //           { nickname: 'FalconScout', role: 'Scout', avatar: 'assets/img/game/team/player/team_pubg_1_4.png' },
  //           { nickname: 'StormCommander', role: 'Commander', avatar: 'assets/img/game/team/player/team_pubg_1_5.png' },
  //         ]
  //       },
  //       {
  //         name: 'OneWe Team',
  //         image: 'assets/img/game/team/team_pubg_2_all.png',
  //         members: [
  //           { nickname: 'GhostSniper', role: 'Sniper', avatar: 'assets/img/game/team/player/team_pubg_2_1.png' },
  //           { nickname: 'TitanGuard', role: 'Support', avatar: 'assets/img/game/team/player/team_pubg_2_2.png' },
  //           { nickname: 'HellRaiser', role: 'Assault', avatar: 'assets/img/game/team/player/team_pubg_2_3.png' },
  //           { nickname: 'RaptorWing', role: 'Scout', avatar: 'assets/img/game/team/player/team_pubg_2_4.png' },
  //           { nickname: 'CrimsonCommander', role: 'Commander', avatar: 'assets/img/game/team/player/team_pubg_2_5.png' },
  //         ]
  //       },
  //     ],
  //     achievements: [
  //       { title: 'PUBG World Cup Champion', year: '2023', team: 'TXT Team' },
  //       { title: 'Best Shooter Award', year: '2022', team: 'OneWe Team' },
  //       { title: 'Team of the Year', year: '2021', team: 'OneWe Team' },
  //       { title: 'Survivor Series Champion', year: '2023', team: 'TXT Team' },
  //       { title: 'National Battle Royale Winner', year: '2022', team: 'OneWe Team' },
  //       { title: 'Best Team Coordination', year: '2021', team: 'TXT Team' }
  //     ]
  //   },
  //   {
  //     name: 'Valorant',
  //     image: 'assets/img/game/valorant.jpg',
  //     teams: [
  //       {
  //         name: 'Red Velvet Team',
  //         image: 'assets/img/game/team/team_valo_1_all.png',
  //         members: [
  //           { nickname: 'ViperX', role: 'Controller', avatar: 'assets/img/game/team/player/team_valo_1_1.png' },
  //           { nickname: 'BladeNova', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_valo_1_2.png' },
  //           { nickname: 'ShadowStrike', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_1_3.png' },
  //           { nickname: 'Phoenix', role: 'Initiator', avatar: 'assets/img/game/team/player/team_valo_1_4.png' },
  //           { nickname: 'Sage', role: 'Flex', avatar: 'assets/img/game/team/player/team_valo_1_5.png' },
  //         ]
  //       },
  //       {
  //         name: 'Itzy Team',
  //         image: 'assets/img/game/team/team_valo_2_all.png',
  //         members: [
  //           { nickname: 'Killjoy', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_valo_2_1.png' },
  //           { nickname: 'Raze', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_2_2.png' },
  //           { nickname: 'Sova', role: 'Initiator', avatar: 'assets/img/game/team/player/team_valo_2_3.png' },
  //           { nickname: 'Breach', role: 'Flex', avatar: 'assets/img/game/team/player/team_valo_2_4.png' },
  //           { nickname: 'Jett', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_2_5.png' },
  //         ]
  //       },
  //     ],
  //     achievements: [
  //       { title: 'Valorant Global Champions', year: '2023', team: 'Itzy Team' },
  //       { title: 'Best Tactical Team', year: '2022', team: 'Red Velvet Team' },
  //       { title: 'Rookie of the Year', year: '2021', team: 'Red Velvet Team' },
  //       { title: 'Valorant Masters Winner', year: '2023', team: 'Red Velvet Team' },
  //       { title: 'Regional Showdown Champion', year: '2022', team: 'Itzy Team' },
  //       { title: 'Best Team Strategy', year: '2021', team: 'Red Velvet Team' }
  //     ]
  //   },
  //   {
  //     name: 'Clash of Clans',
  //     image: 'assets/img/game/coc.jpg',
  //     teams: [
  //       {
  //         name: 'Shinee Team',
  //         image: 'assets/img/game/team/team_coc_1_all.png',
  //         members: [
  //           { nickname: 'ChiefOne', role: 'Leader', avatar: 'assets/img/game/team/player/team_coc_1_1.png' },
  //           { nickname: 'ChiefRogue', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_coc_1_2.png' },
  //           { nickname: 'ChiefX', role: 'Elder', avatar: 'assets/img/game/team/player/team_coc_1_3.png' },
  //           { nickname: 'ChiefFrost', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_1_4.png' },
  //           { nickname: 'ChiefBlaze', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_1_5.png' },
  //         ]
  //       },
  //       {
  //         name: 'Le Sserafim Team',
  //         image: 'assets/img/game/team/team_coc_2_all.png',
  //         members: [
  //           { nickname: 'ChiefNova', role: 'Leader', avatar: 'assets/img/game/team/player/team_coc_2_1.png' },
  //           { nickname: 'ChiefHunter', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_coc_2_2.png' },
  //           { nickname: 'ChiefBlade', role: 'Elder', avatar: 'assets/img/game/team/player/team_coc_2_3.png' },
  //           { nickname: 'ChiefShadow', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_2_4.png' },
  //           { nickname: 'ChiefStorm', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_2_5.png' },
  //         ]
  //       },
  //     ],
  //     achievements: [
  //       { title: 'Clash of Clans World Cup', year: '2023', team: 'Shinee Team' },
  //       { title: 'Best Clan of the Year', year: '2022', team: 'Le Sserafim Team' },
  //       { title: 'Strategy Master Award', year: '2021', team: 'Shinee Team' },
  //       { title: 'War of Clans Champion', year: '2023', team: 'Shinee Team' },
  //       { title: 'Clan Battle Tournament Winner', year: '2022', team: 'Le Sserafim Team' },
  //       { title: 'Best Clan Strategy', year: '2021', team: 'Shinee Team' }
  //     ]
  //   },
  //   {
  //     name: 'Honor of Kings',
  //     image: 'assets/img/game/hok.jpg',
  //     teams: [
  //       {
  //         name: 'EXID Team',
  //         image: 'assets/img/game/team/team_hok_1_all.png',
  //         members: [
  //           { nickname: 'HeroX', role: 'Leader', avatar: 'assets/img/game/team/player/team_hok_1_1.png' },
  //           { nickname: 'HeroNova', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_hok_1_2.png' },
  //           { nickname: 'HeroBlade', role: 'Elder', avatar: 'assets/img/game/team/player/team_hok_1_3.png' },
  //           { nickname: 'HeroStorm', role: 'Member', avatar: 'assets/img/game/team/player/team_hok_1_4.png' },
  //           { nickname: 'HeroFury', role: 'Member', avatar: 'assets/img/game/team/player/team_hok_1_5.png' },
  //         ]
  //       },
  //     ],
  //     achievements: [
  //       { title: 'Honor of Kings Champion', year: '2023', team: 'EXID Team' },
  //       { title: 'Most Strategic Team', year: '2022', team: 'EXID Team' },
  //       { title: 'Player of the Year', year: '2021', team: 'EXID Team' },
  //       { title: 'Honor of Kings World Cup Winner', year: '2023', team: 'EXID Team' },
  //       { title: 'Regional Masters Champion', year: '2022', team: 'EXID Team' },
  //       { title: 'Best Team Coordination Award', year: '2021', team: 'EXID Team' }
  //     ]
  //   },
  // ];

  baseUrl: string = 'https://ubaya.xyz/hybrid/160822004/project/';

  constructor(private http: HttpClient) { }

  getGames(): Observable<any> {
    return this.http.get(this.baseUrl + 'get_games.php');
  }

  getTeams(idgame: number): Observable<any> {
    return this.http.post(this.baseUrl + 'get_teams.php', { idgame });
  }

  getAchievements(idgame: number): Observable<any> {
    return this.http.post(this.baseUrl + 'get_achievements.php', { idgame });
  }

  getFullGameData(idgame: number): Observable<any> {
    return forkJoin({
      teams: this.getTeams(idgame),
      achievements: this.getAchievements(idgame)
    });
  }
}
