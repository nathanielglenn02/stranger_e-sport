import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlayserviceService, Team, Member } from '../../../../playservice.service';

@Component({
  selector: 'app-team-member',
  templateUrl: './team-member.page.html',
  styleUrls: ['./team-member.page.scss'],
})
export class TeamMemberPage implements OnInit {

  selectedTeam: Team | undefined; // Data tim yang dipilih
  idgame: number = 0; // ID game dari URL
  idteam: number = 0; // ID tim dari URL
  members: Member[] = []; // Data anggota tim

  constructor(
    private route: ActivatedRoute,
    private playservice: PlayserviceService
  ) { }

  ngOnInit() {
    // Ambil parameter dari URL
    this.route.params.subscribe(params => {
      this.idgame = +params['idgame']; // Ambil idgame dari URL
      this.idteam = +params['idteam']; // Ambil idteam dari URL
    });

    // Ambil data tim berdasarkan idgame
    this.playservice.getTeams(this.idgame).subscribe(response => {
      if (response.result === 'OK') {
        // Cari tim berdasarkan idteam
        this.selectedTeam = response.data.find((team: Team) => team.idteam === this.idteam);

        // Ambil anggota tim jika tim ditemukan
        if (this.selectedTeam) {
          this.members = this.selectedTeam.members || []; // Default kosong jika undefined
        }
      } else {
        this.selectedTeam = undefined; // Set undefined jika tidak ada tim
        this.members = [];
      }
    });
  }
}
