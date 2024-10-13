import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleserviceService, Schedule} from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.page.html',
  styleUrls: ['./schedule-detail.page.scss'],
})
export class ScheduleDetailPage implements OnInit {

  schedules:any[]=[];
  index:number = 0

  constructor(
    private route: ActivatedRoute,
    private scheduleservice : ScheduleserviceService
  ) { }
  isAlertOpen = false;
  alertButtons = ['Action'];


  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.index = params['index']
    }
  )
    this.schedules= this.scheduleservice.schedules
  }

  setOpen(isOpen: boolean) {
    this.isAlertOpen = isOpen;
  }

}