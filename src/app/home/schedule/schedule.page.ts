import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleserviceService } from 'src/app/scheduleservice.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.page.html',
  styleUrls: ['./schedule.page.scss'],
})

export class SchedulePage implements OnInit {

  schedules:any[]=[]
  constructor(private scheduleservice : ScheduleserviceService) { }

  ngOnInit() { 
    this.schedules= this.scheduleservice.schedules
  }
}
