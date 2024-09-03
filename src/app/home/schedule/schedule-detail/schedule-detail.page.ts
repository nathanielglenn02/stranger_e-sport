import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage {

  events: Event[] = [
    {
      id: 1,
      title: 'Championship Final',
      date: '2024-09-15',
      time: '18:00',
      image: 'assets/img/championship-final.jpg',
      location: 'Stadium XYZ',
      description: 'The grand final of the championship season.',
    },
    {
      id: 2,
      title: 'Live Stream - Game Review',
      date: '2024-09-22',
      time: '15:00',
      image: 'assets/img/live-stream.jpg',
      location: 'Online - YouTube',
      description: 'Join us for a live stream reviewing the latest games.',
    },
    {
      id: 3,
      title: 'E-Sports Workshop',
      date: '2024-10-05',
      time: '09:00',
      image: 'assets/img/workshop.jpg',
      location: 'Conference Hall ABC',
      description: 'A workshop for aspiring e-sports athletes.',
    },
    // Tambahkan acara lainnya sesuai kebutuhan
  ];

  constructor(private route: ActivatedRoute) { }

  // ngOnInit() {
  //   const eventId = +this.route.snapshot.paramMap.get('eventId');
  //   this.event = this.events.find(event => event.id === eventId);
  // }

  notifyMe() {
    alert('Notification created.');
  }
}
