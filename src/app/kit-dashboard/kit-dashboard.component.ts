import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { WorkService } from '../work.service';
import { Router } from '@angular/router';
import { DataService } from '../data.service';
import { GeocodeService } from '../geocode.service';
import { FormControl } from '@angular/forms';
import { ProjectKit } from '../projectKit.model';
import { Work } from '../work.model';

@Component({
  selector: 'app-kit-dashboard',
  templateUrl: './kit-dashboard.component.html',
  styleUrls: ['./kit-dashboard.component.scss']
})
export class KitDashboardComponent implements OnInit {
  option = new FormControl('');
  options: string[];
  bits1= new FormControl('');
  bits2 = new FormControl(''); 


  constructor( private dataService: DataService,
              private workService: WorkService,
              private router: Router, private title: Title) { }

  ngOnInit() {
    this.options = this.dataService.getOptions();
    let currentWork = this.workService.get();
    this.option.setValue(currentWork.option);
    this.title.setTitle("Kit-Dashboard");

    };

    
  save(){
    this.workService.updateOption(this.option.value);
    this.router.navigate(['inproject']);
    
    }
    
  }
