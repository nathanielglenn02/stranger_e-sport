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
  imgPath = ""

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
        console.log('API Response:', response);
        if (response.result === 'OK' && response.data) {
          const userData = response.data;
          console.log('User Data:', userData);

          this.fullname = `${userData.fname} ${userData.lname}`;
          this.idmember = `${userData.idmember}`;
          const imgPath = 'https://ubaya.xyz/hybrid/160822004/' + userData.imgPath;

          alert(`Login successful! Welcome, ${this.fullname}`);

          // Simpan data di localStorage
          localStorage.setItem("project_username", this.username);
          localStorage.setItem("project_fullname", this.fullname);
          localStorage.setItem("project_idmember", this.idmember);
          localStorage.setItem("project_imgPath", imgPath);


          this.checkLogin();
        } else {
          alert(response.message || 'Login failed. Please try again.');
        }
      },
      (error) => {
        console.error('Login Error:', error);
        alert('Login failed. Please try again.');
      }
    );
  }

}
