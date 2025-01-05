import { Component, OnInit } from '@angular/core';
import { AuthserviceService } from '../../authservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  fname = "";
  lname = "";
  username = "";
  password = "";
  confirmPassword = "";
  agreeTerms = false;

  constructor(private authservice: AuthserviceService, private router: Router) { }

  ngOnInit() { }

  canSubmit(): boolean {
    return (
      !!this.fname &&
      !!this.lname &&
      !!this.username &&
      !!this.password &&
      this.password === this.confirmPassword &&
      this.agreeTerms
    );
  }


  register() {
    if (!this.canSubmit()) {
      alert('Harap lengkapi semua data dan setujui syarat serta ketentuan!');
      return;
    }

    this.authservice.register(this.fname, this.lname, this.username, this.password).subscribe(
      (response: any) => {
        if (response.result === 'OK') {
          alert('Registrasi berhasil! Silakan login.');
          this.router.navigate(['/login']);
        } else {
          alert(response.message);
        }
      },
      (error) => {
        console.error('Register Error:', error);
        alert('Registrasi gagal. Silakan coba lagi.');
      }
    );
  }
}
