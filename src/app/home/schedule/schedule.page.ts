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
      date: '8 Sept 2024',
      time: '11:00 AM',  // Added time property
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '20,000 INR',
      participants: '0 of 32',
      image: 'assets/img/Schedule/mpl.jpg'
    },
    {
      id: 2,
      title: 'M6 MLBB',
      date: '8 Sept 2024',
      time: '11:00 AM',  // Added time property
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '25,000 INR',
      participants: '0 of 32',
      image: 'assets/img/Schedule/m6.jpg'
    },
    {
      id: 3,
      title: 'Valorant Champions Tour (VCT) 2024',
      date: '8 Sept 2024',
      time: '11:00 AM',  // Added time property
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '25,000 INR',
      participants: '0 of 30',
      image: 'assets/img/Schedule/valochamp.jpg'
    },
    {
      id: 4,
      title: 'Clash of Clans World Championship 2024',
      date: '8 Sept 2024',
      time: '11:00 AM',  // Added time property
      gameMode: 'Single Elimination',
      platform: 'PC',
      prize: '25,000 INR',
      participants: '0 of 30',
      image: 'assets/img/Schedule/cocwc.jpg'
    }

  ];

  constructor(private roter: Router) { }

  ngOnInit() { }

  // Method to handle event item click
  viewEventDetails(event: any) {
    // This is where you could add logic to navigate to a detailed view page, for example:
    console.log('Event details:', event);
    // Example navigation: this.navCtrl.navigateForward(`/event-details/${event.id}`);
  }
}
