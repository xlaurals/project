import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = new FormControl('');
  password = new FormControl('');
  error: string;

  constructor(private router: Router, private title: Title
    ) { }

  ngOnInit() {
    this.title.setTitle("Login");
  }

  login() {
    if (this.user.value === 'laura' && this.password.value === '1234') {
      this.router.navigate(['profil']);
    } else {
      this.error = 'Benutzername oder Passwort falsch.';
    }
  }
}
