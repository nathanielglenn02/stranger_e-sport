import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../../authservice.service'
import { Router } from '@angular/router';
@Component({
  selector: 'app-newapplyteam',
  templateUrl: './newapplyteam.page.html',
  styleUrls: ['./newapplyteam.page.scss'],
})
export class NewapplyteamPage implements OnInit {

  username = ""
  fullname = ""
  idmember = ""
  idgame = ""

  constructor(private authservice: AuthserviceService, private router: Router) {
    this.checkLogin();
  }

  ngOnInit() {
    this.checkLogin();
    this.read_games();
  }

  public checkLogin(): void {
    this.idmember = localStorage.getItem("project_idmember") ?? "";
    this.username = localStorage.getItem("project_username") ?? "";
    this.fullname = localStorage.getItem("project_fullname") ?? "";
    if (!this.fullname) {
      this.router.navigate(['../../login'], { replaceUrl: true });
    }
  }

  games: any
  public read_games(): void {
    this.authservice.read_game().subscribe(
      (data) => {
        console.log("DATA", data);
        this.games = data;
      }
    );
  }

  teams: any
  public read_teams(): void {
    this.authservice.read_team(Number.parseInt(this.idgame)).subscribe(
      (data) => {
        console.log("DATA", data);
        this.teams = data;
      }
    );
  }

  selectedTeam = ""
  description = ""

  public add_proposal(): void {
    if (!this.idgame || !this.selectedTeam || !this.description) {
      alert('Harap lengkapi semua field sebelum mengirim aplikasi.');
      return;
    }

    this.authservice.add_proposal(this.idmember, this.selectedTeam, this.description).subscribe((response: any) => {
      if (response.result === 'success') {
        alert("success");
        this.router.navigate(['/home/applyteam']);
      }
      else {
        alert(response.message)
      }
    });
  }
}