import { Injectable } from '@angular/core';

export interface Schedule {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  schedules = [
    {
      id: 1,
      title: 'MPL XIV',
      date: '9 Sept 2024',
      time: '11:00 AM',
      gameMode: 'Single Elimination',
      platform: 'Mobile',
      prize: '20,000 $',
      participants: '8 of 32',
      image: 'assets/img/schedule/mpl.jpg',
      venueImage :'assets/img/schedule/scheduledetail/venue_mpl.png',
      affectedTeam: 'Team A vs Team B',
      location: 'Jakarta International Expo, Indonesia',
      description: 'The 14th season of the Mobile Legends Professional League (MPL), featuring the top teams from Southeast Asia competing for the championship.'
    },
    {
      id: 2,
      title: 'M6 MLBB',
      date: '8 Sept 2024',
      time: '11:00 AM',
      gameMode: 'Single Elimination',
      platform: 'Mobile',
      prize: '25,000 $',
      participants: '12 of 32',
      image: 'assets/img/schedule/m6.jpg',
      venueImage :'assets/img/schedule/scheduledetail/venue_mlbb.png',
      affectedTeam: 'Team A vs Team B',
      location: 'SMX Convention Center, Manila, Philippines',
      description: 'The 6th edition of the Mobile Legends: Bang Bang (MLBB) World Championship, where elite teams from around the world clash for glory.'
    },
    {
      id: 3,
      title: 'Valorant Champions Tour (VCT) 2024',
      date: '8 Sept 2024',
      time: '11:00 AM',
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '25,000 $',
      participants: '18 of 30',
      image: 'assets/img/schedule/valochamp.jpg',
      venueImage :'assets/img/schedule/scheduledetail/venue_valo.png',
      affectedTeam: 'Team A vs Team B',
      location: 'Berlin Arena, Germany',
      description: 'The 2024 Valorant Champions Tour brings together the worlds best Valorant teams in a heated competition to determine the ultimate champion.'
    },
    {
      id: 4,
      title: 'Clash of Clans World Championship 2024',
      date: '8 Sept 2024',
      time: '11:00 AM',
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '25,000 $',
      participants: '0 of 30',
      image: 'assets/img/schedule/cocwc.jpg',
      venueImage :'assets/img/schedule/scheduledetail/venue_coc.png',
      affectedTeam: 'Team A vs Team B',
      location: 'Katowice International Convention Center, Poland',
      description: 'The Clash of Clans World Championship 2024 brings the best clan leaders and strategists together to fight for the coveted world title.'
    }
  ];
  constructor() { }
}
