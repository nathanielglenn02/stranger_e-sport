import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  likes: number = 0;
  temp = ""

  constructor() {}
  ngOnInit() {
    this.temp = localStorage.getItem("project_likes") ?? "";
    if (this.temp == "") {
      this.likes = Number.parseInt(this.temp);
      alert(this.temp)
    }
    else {
      this.likes = 0
    }
  }

  likeTeam() {
    this.likes += 1;
    localStorage.setItem("project_likes", this.likes.toString());
  }
}
