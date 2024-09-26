import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() { }
  ytbs = [
    {
      imgSrc: '../../assets/img/home/thumbnail/mpl2.jpg',
      title: 'RRQ HOSHI vs BIGETRON ALPHA | Regular Season Week 6 Day 3 | Game 3 | #MPLIDS14',
      url: 'https://youtu.be/GDB7E8vwKR8?feature=shared'
    },
    {
      imgSrc: '../../assets/img/home/thumbnail/pubg.jpg',
      title: 'VAMPIRE ESPORTS THE NEW KING OF SEA',
      url: 'https://youtu.be/6nYoiH4SaBA?feature=shared'
    },
    {
      imgSrc: '../../assets/img/home/thumbnail/mpl1.jpg',
      title: 'Golden Moment Week 6 presented by UBS Gold #MPLIDS14',
      url: 'https://youtu.be/eQ2m_Pc3BkE?feature=shared'
    },
    {
      imgSrc: '../../assets/img/home/thumbnail/valorant.jpg',
      title: 'EVENT HORIZON : SINGULARITY REVEAL TRAILER',
      url: 'https://youtu.be/Kwh4FtFgTCI?feature=shared'
    },

    {
      imgSrc: '../../assets/img/home/thumbnail/hok.jpg',
      title: 'Arli - Memory Chip | Skin Showcase Video',
      url: 'https://youtu.be/Rb6FNRaAufk?feature=shared'
    }
  ];
  openLink(url: string) {
    window.open(url, '_blank');
  }

}