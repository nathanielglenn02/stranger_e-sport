import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-applyteam',
  templateUrl: './applyteam.page.html',
  styleUrls: ['./applyteam.page.scss'],
})
export class ApplyteamPage implements OnInit {

  username = ""
  fullname = ""
  idmember = ""
  
  constructor(private authservice: AuthserviceService, private router: Router) {
    this.checkLogin();
  }

  ngOnInit() {
    this.checkLogin();
    this.read_proposal();
  }

  private checkLogin(): void {
    this.idmember = localStorage.getItem("project_idmember") ?? "";
    this.username = localStorage.getItem("project_username") ?? "";
    this.fullname = localStorage.getItem("project_fullname") ?? "";
    if (!this.fullname) {
      this.router.navigate(['../login'], { replaceUrl: true });
    }
  }

  proposals: any
  private read_proposal(): void {
    this.authservice.read_proposal(Number.parseInt(this.idmember)).subscribe(
      (data) => {
        console.log("DATA", data);
        this.proposals = data;
      }
    );
  }
}
