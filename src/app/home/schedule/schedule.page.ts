import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})

export class SchedulePage implements OnInit {

  schedules: any[] = [];
  isLoading: boolean = true;
  errorMessage: string = '';

  constructor(private scheduleService: ScheduleserviceService, private router: Router) { }

  ngOnInit() {
    this.loadSchedules();
  }

  loadSchedules() {
    this.scheduleService.getSchedules().subscribe(
      (response: any) => {
        if (response.result === 'OK') {
          this.schedules = response.data;
        } else {
          this.errorMessage = 'Failed to load schedules.';
        }
        this.isLoading = false;
      },
      (error: any) => {
        console.error('Error fetching schedules:', error);
        this.errorMessage = 'An error occurred while loading schedules.';
        this.isLoading = false;
      }
    );
  }

  goToDetail(id: number) {
    this.router.navigate(['/schedule_detail', id]);
  }
}
