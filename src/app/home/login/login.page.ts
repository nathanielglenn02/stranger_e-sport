import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  username = ""
  password = ""
  fullname = ""
  idmember = ""

  constructor(private authservice: AuthserviceService, private router: Router) {
    this.username = localStorage.getItem("project_username") ?? "";
    this.checkLogin();
  }

  ngOnInit() {
    this.checkLogin();
  }

  private checkLogin(): void {
    this.fullname = localStorage.getItem("project_fullname") ?? "";

    if (this.fullname) {
      this.router.navigate(['/home'], { replaceUrl: true });
    }
  }

  login() {
    this.authservice.login(this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'OK') {
          // Ambil data user dari array pertama di response.data
          const userData = response.data[0];
          this.fullname = `${userData.fname} ${userData.lname}`;
          this.idmember =  `${userData.idmember}`;

          alert(`Login successful! Welcome, ${this.fullname}`);

          // Simpan ke localStorage
          localStorage.setItem("project_username", this.username);
          localStorage.setItem("project_fullname", this.fullname);
          localStorage.setItem("project_idmember", this.idmember);

          // Lakukan tindakan setelah login
          this.checkLogin();
        } else {
          // Tampilkan pesan error jika login gagal
          alert(response.message);
        }
      },
      (error) => {
        // Tangani error dari HTTP request
        console.error('Login Error:', error);
        alert('Login failed. Please try again.');
      }
    );
  }
}
