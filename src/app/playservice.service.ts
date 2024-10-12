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
  date: string;
  image: string;
}

export interface Game {
  id: number;
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
      id: 1,
      name: 'Mobile Legends',
      image: 'assets/img/game/ml.jpg',
      teams: [
        {
          name: 'Team Alpha',
          image: 'assets/img/game/ml.jpg',
          members: [
            { nickname: 'Player1', role: 'Duelist', avatar: 'assets/img/Ariel.JPG' },
            { nickname: 'Player2', role: 'Controller', avatar: 'assets/img/Ariel.JPG' },
            { nickname: 'Player3', role: 'Sentinel', avatar: 'assets/img/Ariel.JPG' },
            { nickname: 'Player4', role: 'Initiator', avatar: 'assets/img/Ariel.JPG' },
            { nickname: 'Player5', role: 'Flex', avatar: 'assets/img/Ariel.JPG' },
          ]
        },
        {
          name: 'Team Bravo',
          image: 'assets/img/game/ml.jpg',
          members: [
            { nickname: 'Player6', role: 'Duelist', avatar: 'assets/img/player/player6.jpg' },
            { nickname: 'Player7', role: 'Controller', avatar: 'assets/img/player/player7.jpg' },
            { nickname: 'Player8', role: 'Sentinel', avatar: 'assets/img/player/player8.jpg' },
            { nickname: 'Player9', role: 'Initiator', avatar: 'assets/img/player/player9.jpg' },
            { nickname: 'Player10', role: 'Flex', avatar: 'assets/img/player/player10.jpg' },
          ]
        },
        {
          name: 'Team Charlie',
          image: 'assets/img/game/ml.jpg',
          members: [
            { nickname: 'Player11', role: 'Duelist', avatar: 'assets/img/player/player11.jpg' },
            { nickname: 'Player12', role: 'Controller', avatar: 'assets/img/player/player12.jpg' },
            { nickname: 'Player13', role: 'Sentinel', avatar: 'assets/img/player/player13.jpg' },
            { nickname: 'Player14', role: 'Initiator', avatar: 'assets/img/player/player14.jpg' },
            { nickname: 'Player15', role: 'Flex', avatar: 'assets/img/player/player15.jpg' },
          ]
        },
      ],
      achievements: [
        { title: 'Champion League Winner', date: '2023', image: 'assets/img/achievement/ml_1.jpg' },
        { title: 'Best Team Play', date: '2022', image: 'assets/img/achievement/ml_2.jpg' },
        { title: 'Most Valuable Player', date: '2021', image: 'assets/img/achievement/ml_3.jpg' },
      ]
    },
    {
      id: 2,
      name: 'PUBG',
      image: 'assets/img/game/pubg.jpg',
      teams: [
        {
          name: 'Team Delta',
          image: 'assets/img/game/pubg.jpg',
          members: [
            { nickname: 'Player16', role: 'Sniper', avatar: 'assets/img/player/player16.jpg' },
            { nickname: 'Player17', role: 'Support', avatar: 'assets/img/player/player17.jpg' },
            { nickname: 'Player18', role: 'Assault', avatar: 'assets/img/player/player18.jpg' },
            { nickname: 'Player19', role: 'Scout', avatar: 'assets/img/player/player19.jpg' },
            { nickname: 'Player20', role: 'Commander', avatar: 'assets/img/player/player20.jpg' },
          ]
        },
        {
          name: 'Team Echo',
          image: 'assets/img/game/pubg.jpg',
          members: [
            { nickname: 'Player21', role: 'Sniper', avatar: 'assets/img/player/player21.jpg' },
            { nickname: 'Player22', role: 'Support', avatar: 'assets/img/player/player22.jpg' },
            { nickname: 'Player23', role: 'Assault', avatar: 'assets/img/player/player23.jpg' },
            { nickname: 'Player24', role: 'Scout', avatar: 'assets/img/player/player24.jpg' },
            { nickname: 'Player25', role: 'Commander', avatar: 'assets/img/player/player25.jpg' },
          ]
        },
        {
          name: 'Team Foxtrot',
          image: 'assets/img/game/pubg.jpg',
          members: [
            { nickname: 'Player26', role: 'Sniper', avatar: 'assets/img/player/player26.jpg' },
            { nickname: 'Player27', role: 'Support', avatar: 'assets/img/player/player27.jpg' },
            { nickname: 'Player28', role: 'Assault', avatar: 'assets/img/player/player28.jpg' },
            { nickname: 'Player29', role: 'Scout', avatar: 'assets/img/player/player29.jpg' },
            { nickname: 'Player30', role: 'Commander', avatar: 'assets/img/player/player30.jpg' },
          ]
        },
      ],
      achievements: [
        { title: 'PUBG World Cup Champion', date: '2023', image: 'assets/img/achievement/pubg_1.jpg' },
        { title: 'Best Shooter Award', date: '2022', image: 'assets/img/achievement/pubg_2.jpg' },
        { title: 'Team of the Year', date: '2021', image: 'assets/img/achievement/pubg_3.jpg' },
      ]
    },
    {
      id: 3,
      name: 'Valorant',
      image: 'assets/img/game/valorant.jpg',
      teams: [
        {
          name: 'Team Zulu',
          image: 'assets/img/game/valorant.jpg',
          members: [
            { nickname: 'ViperX', role: 'Controller', avatar: 'assets/img/player/viperx.jpg' },
            { nickname: 'BladeNova', role: 'Sentinel', avatar: 'assets/img/player/bladenova.jpg' },
            { nickname: 'ShadowStrike', role: 'Duelist', avatar: 'assets/img/player/shadowstrike.jpg' },
            { nickname: 'Phoenix', role: 'Initiator', avatar: 'assets/img/player/phoenix.jpg' },
            { nickname: 'Sage', role: 'Flex', avatar: 'assets/img/player/sage.jpg' },
          ]
        },
        {
          name: 'Team Tango',
          image: 'assets/img/game/valorant.jpg',
          members: [
            { nickname: 'Killjoy', role: 'Sentinel', avatar: 'assets/img/player/killjoy.jpg' },
            { nickname: 'Raze', role: 'Duelist', avatar: 'assets/img/player/raze.jpg' },
            { nickname: 'Sova', role: 'Initiator', avatar: 'assets/img/player/sova.jpg' },
            { nickname: 'Breach', role: 'Flex', avatar: 'assets/img/player/breach.jpg' },
            { nickname: 'Jett', role: 'Duelist', avatar: 'assets/img/player/jett.jpg' },
          ]
        },
        {
          name: 'Team Sierra',
          image: 'assets/img/game/valorant.jpg',
          members: [
            { nickname: 'Omen', role: 'Controller', avatar: 'assets/img/player/omen.jpg' },
            { nickname: 'Brimstone', role: 'Sentinel', avatar: 'assets/img/player/brimstone.jpg' },
            { nickname: 'Cypher', role: 'Sentinel', avatar: 'assets/img/player/cypher.jpg' },
            { nickname: 'Reyna', role: 'Duelist', avatar: 'assets/img/player/reyna.jpg' },
            { nickname: 'Yoru', role: 'Flex', avatar: 'assets/img/player/yoru.jpg' },
          ]
        },
      ],
      achievements: [
        { title: 'Valorant Global Champions', date: '2023', image: 'assets/img/achievement/valorant_1.jpg' },
        { title: 'Best Tactical Team', date: '2022', image: 'assets/img/achievement/valorant_2.jpg' },
        { title: 'Rookie of the Year', date: '2021', image: 'assets/img/achievement/valorant_3.jpg' },
      ]
    },
    {
      id: 4,
      name: 'Clash of Clans',
      image: 'assets/img/game/coc.jpg',
      teams: [
        {
          name: 'Team India',
          image: 'assets/img/game/coc.jpg',
          members: [
            { nickname: 'Chief1', role: 'Leader', avatar: 'assets/img/player/chief1.jpg' },
            { nickname: 'Chief2', role: 'Co-Leader', avatar: 'assets/img/player/chief2.jpg' },
            { nickname: 'Chief3', role: 'Elder', avatar: 'assets/img/player/chief3.jpg' },
            { nickname: 'Chief4', role: 'Member', avatar: 'assets/img/player/chief4.jpg' },
            { nickname: 'Chief5', role: 'Member', avatar: 'assets/img/player/chief5.jpg' },
          ]
        },
        {
          name: 'Team Juliet',
          image: 'assets/img/game/coc.jpg',
          members: [
            { nickname: 'Chief6', role: 'Leader', avatar: 'assets/img/player/chief6.jpg' },
            { nickname: 'Chief7', role: 'Co-Leader', avatar: 'assets/img/player/chief7.jpg' },
            { nickname: 'Chief8', role: 'Elder', avatar: 'assets/img/player/chief8.jpg' },
            { nickname: 'Chief9', role: 'Member', avatar: 'assets/img/player/chief9.jpg' },
            { nickname: 'Chief10', role: 'Member', avatar: 'assets/img/player/chief10.jpg' },
          ]
        },
        {
          name: 'Team Kilo',
          image: 'assets/img/game/coc.jpg',
          members: [
            { nickname: 'Chief11', role: 'Leader', avatar: 'assets/img/player/chief11.jpg' },
            { nickname: 'Chief12', role: 'Co-Leader', avatar: 'assets/img/player/chief12.jpg' },
            { nickname: 'Chief13', role: 'Elder', avatar: 'assets/img/player/chief13.jpg' },
            { nickname: 'Chief14', role: 'Member', avatar: 'assets/img/player/chief14.jpg' },
            { nickname: 'Chief15', role: 'Member', avatar: 'assets/img/player/chief15.jpg' },
          ]
        },
      ],
      achievements: [
        { title: 'Clash of Clans World Cup', date: '2023', image: 'assets/img/achievement/coc_1.jpg' },
        { title: 'Best Clan of the Year', date: '2022', image: 'assets/img/achievement/coc_2.jpg' },
        { title: 'Strategy Master Award', date: '2021', image: 'assets/img/achievement/coc_3.jpg' },
      ]
    },
    {
      id: 5,
      name: 'Honor of Kings',
      image: 'assets/img/game/hok.jpg',
      teams: [
        {
          name: 'Team Lima',
          image: 'assets/img/game/hok.jpg',
          members: [
            { nickname: 'Hero1', role: 'Leader', avatar: 'assets/img/player/hero1.jpg' },
            { nickname: 'Hero2', role: 'Co-Leader', avatar: 'assets/img/player/hero2.jpg' },
            { nickname: 'Hero3', role: 'Elder', avatar: 'assets/img/player/hero3.jpg' },
            { nickname: 'Hero4', role: 'Member', avatar: 'assets/img/player/hero4.jpg' },
            { nickname: 'Hero5', role: 'Member', avatar: 'assets/img/player/hero5.jpg' },
          ]
        },
        {
          name: 'Team Mike',
          image: 'assets/img/game/hok.jpg',
          members: [
            { nickname: 'Hero6', role: 'Leader', avatar: 'assets/img/player/hero6.jpg' },
            { nickname: 'Hero7', role: 'Co-Leader', avatar: 'assets/img/player/hero7.jpg' },
            { nickname: 'Hero8', role: 'Elder', avatar: 'assets/img/player/hero8.jpg' },
            { nickname: 'Hero9', role: 'Member', avatar: 'assets/img/player/hero9.jpg' },
            { nickname: 'Hero10', role: 'Member', avatar: 'assets/img/player/hero10.jpg' },
          ]
        },
        {
          name: 'Team November',
          image: 'assets/img/game/hok.jpg',
          members: [
            { nickname: 'Hero11', role: 'Leader', avatar: 'assets/img/player/hero11.jpg' },
            { nickname: 'Hero12', role: 'Co-Leader', avatar: 'assets/img/player/hero12.jpg' },
            { nickname: 'Hero13', role: 'Elder', avatar: 'assets/img/player/hero13.jpg' },
            { nickname: 'Hero14', role: 'Member', avatar: 'assets/img/player/hero14.jpg' },
            { nickname: 'Hero15', role: 'Member', avatar: 'assets/img/player/hero15.jpg' },
          ]
        },
      ],
      achievements: [
        { title: 'Honor of Kings World Champion', date: '2023', image: 'assets/img/achievement/hok_1.jpg' },
        { title: 'Best Team Coordination', date: '2022', image: 'assets/img/achievement/hok_2.jpg' },
        { title: 'King of the Arena', date: '2021', image: 'assets/img/achievement/hok_3.jpg' },
      ]
    }
  ];

  getGames() {
    return this.games;
  }



  constructor() { }
}
