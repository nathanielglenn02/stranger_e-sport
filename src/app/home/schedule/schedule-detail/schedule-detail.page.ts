import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedule: any = {};
  isLoading: boolean = true;
  isAlertOpen: boolean = false;
  alertButtons = ['OK'];

  constructor(
    private route: ActivatedRoute,
    private scheduleService: ScheduleserviceService
  ) { }

  ngOnInit() {
    const idevent = Number(this.route.snapshot.params['idevent']);
    console.log('ID Event diterima:', idevent);

    if (isNaN(idevent) || idevent <= 0) {
      console.error('Error: Event ID is required and must be numeric.');
      this.isLoading = false;
      return;
    }

    this.loadScheduleDetail(idevent);
  }

  loadScheduleDetail(idevent: number) {
    console.log('Mengirim ID Event ke API:', idevent);

    this.scheduleService.getScheduleDetail(idevent).subscribe(
      (response: any) => {
        console.log('Response dari API:', response);

        if (response.result === 'OK') {
          this.schedule = response.data || {};
        } else {
          console.error('Error:', response.message);
        }
        this.isLoading = false;
      },
      (error) => {
        console.error('Error API:', error);
        this.isLoading = false;
      }
    );
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }
}
