import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  swiperModules = [IonicSlides];
  events = [
    {
      imgSrc: '../../assets/img/Home/thumbnail/mpl1.jpg',
      title: 'Golden Moment Week 6 presented by UBS Gold #MPLIDS14',
    },
    {
      imgSrc: '../../assets/img/Home/thumbnail/valorant.jpg',
      title: 'EVENT HORIZON : SINGULARITY REVEAL TRAILER',
    },
    {
      imgSrc: '../../assets/img/Home/thumbnail/mpl2.jpg',
      title: 'RRQ HOSHI vs BIGETRON ALPHA | Regular Season Week 6 Day 3 | Game 3 | #MPLIDS14',
    },
    {
      imgSrc: '../../assets/img/Home/thumbnail/hok.jpg',
      title: 'Arli - Memory Chip | Skin Showcase Video',
    },
    {
      imgSrc: '../../assets/img/Home/thumbnail/pubg.jpg',
      title: 'VAMPIRE ESPORTS THE NEW KING OF SEA',
    }
  ];
}
