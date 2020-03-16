import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { WorkService } from '../work.service';
import { NgModule } from '@angular/core';
export interface Faculty {

  value: string;
  viewValue: string;
}
export interface Degree {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.scss']
})
export class ProfilComponent implements OnInit {

 user=new FormControl('');
  matrikelnummer = new FormControl('');  
  studiengang=new FormControl('');
  faculty= new FormControl('');
  yourSharedService: any;

constructor(private router: Router, private title :Title,    private workService: WorkService) { }
faculties: Faculty[] = [
  {value: 'wirtschaft', viewValue: 'Wirtschaft'},
  {value: 'technik', viewValue: 'Technik'},
  {value: 'gestaltung', viewValue: 'Gestaltung'}
];


degrees: Degree[] =[
  {value: 'it', viewValue: 'IT'},
  {value: 'maschinenbau', viewValue: 'Maschinenbau'},
  {value: 'Marketing', viewValue: 'marketing'}
];
ngOnInit() {
 
  this.title.setTitle("Profil");
}
next() {
//console.warn(this.userprofilForm.value);
//console.log(this.userprofilForm.controls['user'].get)
//console.log(this.user.value);
//this.workService.updateUser(this.user.get('user').value);
this.router.navigate(['code']);
}
}

