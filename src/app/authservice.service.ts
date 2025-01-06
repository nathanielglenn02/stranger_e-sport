import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = {
      username: username,
      password: password
    };
    return this.http.post(
      "https://ubaya.xyz/hybrid/160822004/project/login.php", body, { headers });
  }

  register(fname: string, lname: string, username: string, password: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('fname', fname);
    body.set('lname', lname);
    body.set('username', username);
    body.set('password', password);
    const urlEncodedData = body.toString();

    return this.http.post(
      "https://ubaya.xyz/hybrid/160822004/project/register.php",
      urlEncodedData,
      { headers }
    );
  }

  read_proposal(idmember?: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160822004/project/read_proposal.php?idmember=" + idmember);
  }

  read_game(): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160822004/project/read_game.php");
  }

  read_team(idgame?: number): Observable<any> {
    return this.http.get("https://ubaya.xyz/hybrid/160822004/project/read_team.php?idgame=" + idgame);
  }

  add_proposal(p_idmember: string, p_idteam: string, p_description: string) {
    //this.pastas.push({name:p_name,url:p_url,description:p_description,price:p_price})
    const headers = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded' });
    const body = new URLSearchParams();
    body.set('idmember', p_idmember);
    body.set('idteam', p_idteam);
    body.set('description', p_description);
    const urlEncodedData = body.toString();
    return this.http.post(
      "https://ubaya.xyz/hybrid/160822004/project/create_proposal.php", urlEncodedData, { headers });
  }
}
