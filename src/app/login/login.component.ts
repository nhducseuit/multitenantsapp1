import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  loginToKMU() {
    localStorage.setItem('tenant', JSON.stringify({
      id: 'kmu',
      name: 'KMU'
    }));
    this.router.navigate(['dashboard']);
  }

  loginToUIT() {
    localStorage.setItem('tenant', JSON.stringify({
      id: 'uit',
      name: 'UIT'
    }));
    this.router.navigate(['dashboard']);
  }

  loginToKMUForm() {
    localStorage.setItem('tenant', JSON.stringify({
      id: 'kmu',
      name: 'KMU'
    }));
    this.router.navigate(['registration']);
  }

  loginToUITForm() {
    localStorage.setItem('tenant', JSON.stringify({
      id: 'uit',
      name: 'UIT'
    }));
    this.router.navigate(['registration']);
  }

}
