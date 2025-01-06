import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { defineCustomElements } from '@ionic/pwa-elements/loader';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  username = ""
  password = ""
  fullname = ""
  imgPath = ""

  constructor(private router: Router) {
    this.username = localStorage.getItem("project_username") ?? "";
    this.checkLogin();
    // defineCustomElements(window);
  }

  ngOnInit() {
    this.checkLogin();
  }

  private checkLogin(): void {
    this.fullname = localStorage.getItem("project_fullname") ?? "";
    this.imgPath = localStorage.getItem('project_imgPath') || 'https://ubaya.xyz/hybrid/160822004/assets/img/default.jpg'; // Gambar default
    console.log(this.imgPath)
    if (!this.fullname) {
      this.router.navigate(['/login'], { replaceUrl: true }); 
    }
  }

  logout() {
    this.username = ""
    this.fullname = ""
    localStorage.removeItem("project_username")
    localStorage.removeItem("project_fullname")
    this.checkLogin();
  }

  ionViewWillEnter() {
    this.checkLogin();
  }

  ytbs = [
    {
      imgSrc: 'assets/img/home/thumbnail/mpl2.jpg',
      title: 'RRQ HOSHI vs BIGETRON ALPHA | Regular Season Week 6 Day 3 | Game 3 | #MPLIDS14',
      url: 'https://youtu.be/GDB7E8vwKR8?feature=shared'
    },
    {
      imgSrc: 'assets/img/home/thumbnail/pubg.jpg',
      title: 'VAMPIRE ESPORTS THE NEW KING OF SEA',
      url: 'https://youtu.be/6nYoiH4SaBA?feature=shared'
    },
    {
      imgSrc: 'assets/img/home/thumbnail/mpl1.jpg',
      title: 'Golden Moment Week 6 presented by UBS Gold #MPLIDS14',
      url: 'https://youtu.be/eQ2m_Pc3BkE?feature=shared'
    },
    {
      imgSrc: 'assets/img/home/thumbnail/valorant.jpg',
      title: 'EVENT HORIZON : SINGULARITY REVEAL TRAILER',
      url: 'https://youtu.be/Kwh4FtFgTCI?feature=shared'
    },
    {
      imgSrc: 'assets/img/home/thumbnail/hok.jpg',
      title: 'Arli - Memory Chip | Skin Showcase Video',
      url: 'https://youtu.be/Rb6FNRaAufk?feature=shared'
    }
  ];

  evts = [
    {
      imgSrc: 'assets/img/schedule/mpl.jpg',
      title: 'MPL XXIV - Single Elimination'
    },
    {
      imgSrc: 'assets/img/schedule/m6.jpg',
      title: 'M6 MLBB - Single Elimination'
    },
    {
      imgSrc: 'assets/img/schedule/valochamp.jpg',
      title: 'Valorant Champions Tour (VCT) 2024 - Single Elimination'
    },
    {
      imgSrc: 'assets/img/schedule/cocwc.jpg',
      title: 'Clash of Clans World Championship 2024 - Single Elimination'
    }
  ];

  openLink(url: string) {
    window.open(url, '_blank');
  }
}