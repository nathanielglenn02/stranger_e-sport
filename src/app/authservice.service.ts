import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.xyz/hybrid/160822004/project/login.php", urlEncodedData, { headers });
  }
  
  read_proposal(usn?: string): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160822004/read_proposal.php?username=" + usn);
  }
}
