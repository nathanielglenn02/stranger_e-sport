import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage {
  likes: number = 0;

  constructor() {}
  ngOnInit() {
  }

  likeTeam() {
    this.likes += 1;
  }
}
