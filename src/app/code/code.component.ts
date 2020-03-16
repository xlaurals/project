import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.scss']
})
export class CodeComponent implements OnInit {

  constructor(private title: Title, private router: Router) { }

  ngOnInit() {
    this.title.setTitle("Code");
  }
next() {
  this.router.navigate(['dashboard']);

}
}
