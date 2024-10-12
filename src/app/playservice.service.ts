import { Injectable } from '@angular/core';

export interface Member {
  nickname: string;
  role: string;
  avatar: string;
}

export interface Team {
  name: string;
  image: string;
  members: Member[];
}

export interface Achievement {
  title: string;
  year: string;
  team: string;
}

export interface Game {
  name: string;
  image: string;
  teams: Team[];
  achievements: Achievement[];
}

@Injectable({
  providedIn: 'root'
})
export class PlayserviceService {

  games = [
    {
      name: 'Mobile Legends',
      image: 'assets/img/game/ml.jpg',
      teams: [
        {
          name: 'One Direction',
          image: 'assets/img/game/team/team_ml_1_all.png',
          members: [
            { nickname: 'StormRider', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_1_1.png' },
            { nickname: 'SkyWatcher', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_1_2.png' },
            { nickname: 'NightShade', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_1_3.png' },
            { nickname: 'IronFist', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_1_4.png' },
            { nickname: 'GhostWalker', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_1_5.png' },
          ]
        },
        {
          name: 'Day6',
          image: 'assets/img/game/team/team_ml_2_all.png',
          members: [
            { nickname: 'ThunderBolt', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_2_1.png' },
            { nickname: 'AquaGuard', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_2_2.png' },
            { nickname: 'ShadowStalker', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_2_3.png' },
            { nickname: 'BlazeWing', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_2_4.png' },
            { nickname: 'StormChaser', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_2_5.png' },
          ]
        },
        {
          name: 'Black Pink',
          image: 'assets/img/game/team/team_ml_3_all.png',
          members: [
            { nickname: 'PhantomBlade', role: 'Duelist', avatar: 'assets/img/game/team/player/team_ml_3_1.png' },
            { nickname: 'MoonShadow', role: 'Controller', avatar: 'assets/img/game/team/player/team_ml_3_2.png' },
            { nickname: 'SilverArrow', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_ml_3_3.png' },
            { nickname: 'FrostGuard', role: 'Initiator', avatar: 'assets/img/game/team/player/team_ml_3_4.png' },
            { nickname: 'SteelHeart', role: 'Flex', avatar: 'assets/img/game/team/player/team_ml_3_5.png' },
          ]
        },
      ],
      achievements: [
        { title: 'Champion League Winner', date: '2023', team: 'One Direction' },
        { title: 'Best Team Play', date: '2022' , team: 'Day6'},
        { title: 'Most Valuable Player', date: '2021' },
        { title: 'International Invitational Champion', date: '2023', team: 'One Direction' },
        { title: 'National Grand Finals', date: '2022', team: 'Day6' },
        { title: 'Regional Qualifiers Winner', date: '2021', team: 'Black Pink' }
      ]
    },
    {
      name: 'PUBG',
      image: 'assets/img/game/pubg.jpg',
      teams: [
        {
          name: 'TXT',
          image: 'assets/img/game/team/team_pubg_1_all.png',
          members: [
            { nickname: 'DeadEye', role: 'Sniper', avatar: 'assets/img/game/team/player/team_pubg_1_1.png' },
            { nickname: 'IronHawk', role: 'Support', avatar: 'assets/img/game/team/player/team_pubg_1_2.png' },
            { nickname: 'WarLord', role: 'Assault', avatar: 'assets/img/game/team/player/team_pubg_1_3.png' },
            { nickname: 'FalconScout', role: 'Scout', avatar: 'assets/img/game/team/player/team_pubg_1_4.png' },
            { nickname: 'StormCommander', role: 'Commander', avatar: 'assets/img/game/team/player/team_pubg_1_5.png' },
          ]
        },
        {
          name: 'OneWe',
          image: 'assets/img/game/team/team_pubg_2_all.png',
          members: [
            { nickname: 'GhostSniper', role: 'Sniper', avatar: 'assets/img/game/team/player/team_pubg_2_1.png' },
            { nickname: 'TitanGuard', role: 'Support', avatar: 'assets/img/game/team/player/team_pubg_2_2.png' },
            { nickname: 'HellRaiser', role: 'Assault', avatar: 'assets/img/game/team/player/team_pubg_2_3.png' },
            { nickname: 'RaptorWing', role: 'Scout', avatar: 'assets/img/game/team/player/team_pubg_2_4.png' },
            { nickname: 'CrimsonCommander', role: 'Commander', avatar: 'assets/img/game/team/player/team_pubg_2_5.png' },
          ]
        },
      ],
      achievements: [
        { title: 'PUBG World Cup Champion', date: '2023', team: 'TXT' },
        { title: 'Best Shooter Award', date: '2022', team: 'OneWe' },
        { title: 'Team of the Year', date: '2021' },
        { title: 'Survivor Series Champion', date: '2023', team: 'TXT' },
        { title: 'National Battle Royale Winner', date: '2022', team: 'OneWe' },
        { title: 'Best Team Coordination', date: '2021', team: 'TXT' }
      ]
    },
    {
      name: 'Valorant',
      image: 'assets/img/game/valorant.jpg',
      teams: [
        {
          name: 'Red Velvet',
          image: 'assets/img/game/team/team_valo_1_all.png',
          members: [
            { nickname: 'ViperX', role: 'Controller', avatar: 'assets/img/game/team/player/team_valo_1_1.png' },
            { nickname: 'BladeNova', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_valo_1_2.png' },
            { nickname: 'ShadowStrike', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_1_3.png' },
            { nickname: 'Phoenix', role: 'Initiator', avatar: 'assets/img/game/team/player/team_valo_1_4.png' },
            { nickname: 'Sage', role: 'Flex', avatar: 'assets/img/game/team/player/team_valo_1_5.png' },
          ]
        },
        {
          name: 'Itzy',
          image: 'assets/img/game/team/team_valo_2_all.png',
          members: [
            { nickname: 'Killjoy', role: 'Sentinel', avatar: 'assets/img/game/team/player/team_valo_2_1.png' },
            { nickname: 'Raze', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_2_2.png' },
            { nickname: 'Sova', role: 'Initiator', avatar: 'assets/img/game/team/player/team_valo_2_3.png' },
            { nickname: 'Breach', role: 'Flex', avatar: 'assets/img/game/team/player/team_valo_2_4.png' },
            { nickname: 'Jett', role: 'Duelist', avatar: 'assets/img/game/team/player/team_valo_2_5.png' },
          ]
        },
      ],
      achievements: [
        { title: 'Valorant Global Champions', date: '2023', team: 'Itzy'  },
        { title: 'Best Tactical Team', date: '2022', team: 'Red Velvet' },
        { title: 'Rookie of the Year', date: '2021', team: 'Red Velvet' },
        { title: 'Valorant Masters Winner', date: '2023', team: 'Red Velvet' },
        { title: 'Regional Showdown Champion', date: '2022', team: 'Itzy' },
        { title: 'Best Team Strategy', date: '2021', team: 'Red Velvet' }
      ]
    },
    {
      name: 'Clash of Clans',
      image: 'assets/img/game/coc.jpg',
      teams: [
        {
          name: 'Shinee',
          image: 'assets/img/game/team/team_coc_1_all.png',
          members: [
            { nickname: 'ChiefOne', role: 'Leader', avatar: 'assets/img/game/team/player/team_coc_1_1.png' },
            { nickname: 'ChiefRogue', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_coc_1_2.png' },
            { nickname: 'ChiefX', role: 'Elder', avatar: 'assets/img/game/team/player/team_coc_1_3.png' },
            { nickname: 'ChiefFrost', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_1_4.png' },
            { nickname: 'ChiefBlaze', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_1_5.png' },
          ]
        },
        {
          name: 'Le Sserafim',
          image: 'assets/img/game/team/team_coc_2_all.png',
          members: [
            { nickname: 'ChiefNova', role: 'Leader', avatar: 'assets/img/game/team/player/team_coc_2_1.png' },
            { nickname: 'ChiefHunter', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_coc_2_2.png' },
            { nickname: 'ChiefBlade', role: 'Elder', avatar: 'assets/img/game/team/player/team_coc_2_3.png' },
            { nickname: 'ChiefShadow', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_2_4.png' },
            { nickname: 'ChiefStorm', role: 'Member', avatar: 'assets/img/game/team/player/team_coc_2_5.png' },
          ]
        },
      ],
      achievements: [
        { title: 'Clash of Clans World Cup', date: '2023', team: 'Shinee' },
        { title: 'Best Clan of the Year', date: '2022',  team: 'Le Sserafim' },
        { title: 'Strategy Master Award', date: '2021', team: 'Shinee' },
        { title: 'War of Clans Champion', date: '2023', team: 'Shinee' },
        { title: 'Clan Battle Tournament Winner', date: '2022', team: 'Le Sserafim' },
        { title: 'Best Clan Strategy', date: '2021', team: 'Shinee' }
      ]
    },
    {
      name: 'Honor of Kings',
      image: 'assets/img/game/hok.jpg',
      teams: [
        {
          name: 'EXID',
          image: 'assets/img/game/team/team_hok_1_all.png',
          members: [
            { nickname: 'HeroX', role: 'Leader', avatar: 'assets/img/game/team/player/team_hok_1_1.png' },
            { nickname: 'HeroNova', role: 'Co-Leader', avatar: 'assets/img/game/team/player/team_hok_1_2.png' },
            { nickname: 'HeroBlade', role: 'Elder', avatar: 'assets/img/game/team/player/team_hok_1_3.png' },
            { nickname: 'HeroStorm', role: 'Member', avatar: 'assets/img/game/team/player/team_hok_1_4.png' },
            { nickname: 'HeroFury', role: 'Member', avatar: 'assets/img/game/team/player/team_hok_1_5.png' },
          ]
        },
      ],
      achievements: [
        { title: 'Honor of Kings Champion', date: '2023', team: 'EXID' },
        { title: 'Most Strategic Team', date: '2022', team: 'EXID' },
        { title: 'Player of the Year', date: '2021', team: 'EXID' },
        { title: 'Honor of Kings World Cup Winner', date: '2023', team: 'EXID' },
        { title: 'Regional Masters Champion', date: '2022', team: 'EXID' },
        { title: 'Best Team Coordination Award', date: '2021', team: 'EXID' }
      ]
    },
  ];


  getGames() {
    return this.games;
  }



  constructor() { }
}
