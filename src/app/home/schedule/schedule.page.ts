import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

interface Event {
  id: number;
  title: string;
  date: string;
  time: string;
  image: string;
  location: string;
  description: string;
}

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})
export class SchedulePage implements OnInit {

  events = [
    {
      id: 1,
      title: 'MPL XIV',
      date: '9 Sept 2024',
      time: '11:00 AM',
      gameMode: 'Single Elimination',
      platform: 'Mobile',
      prize: '20,000 $',
      participants: '8 of 32',
      image: 'assets/img/Schedule/mpl.jpg',
      location: '',
      description: ''
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
      image: 'assets/img/Schedule/m6.jpg',
      location: '',
      description: ''
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
      image: 'assets/img/Schedule/valochamp.jpg',
      location: '',
      description: ''
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
      image: 'assets/img/Schedule/cocwc.jpg',
      location: '',
      description: ''
    }
  ];

  constructor(private roter: Router) { }

  ngOnInit() { }

  viewEventDetails(event: any) {
    console.log('Event details:', event);
  }
}
