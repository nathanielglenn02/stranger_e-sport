import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface Schedule {
  id: number;
  name: string;
  date: string;
  time: string;
  imgPath: string;
  location: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class ScheduleserviceService {

  baseUrl: string = "https://ubaya.xyz/hybrid/160822004/project/";

  constructor(private http: HttpClient) { }

  getSchedules(): Observable<any> {
    return this.http.get(this.baseUrl + "get_schedules.php");
  }

  getScheduleDetail(idevent: number): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idevent', idevent.toString());
    const urlEncodedData = body.toString();

    console.log('Body yang dikirim ke API:', urlEncodedData);
    return this.http.post(this.baseUrl + "get_schedule_detail.php", urlEncodedData, { headers });
  }


}
