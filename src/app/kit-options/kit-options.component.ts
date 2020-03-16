import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { DataService } from '../data.service';
import { WorkService } from '../work.service';
import { Router } from '@angular/router';
import { ProjectKit } from '../projectKit.model';

@Component({
  selector: 'app-kit-options',
  templateUrl: './kit-options.component.html',
  styleUrls: ['./kit-options.component.scss']
})
export class KitOptionsComponent implements OnInit {
  options: string[];
  selection: number; 
  
  constructor(private dataService: DataService,
    private workService: WorkService,
    private router: Router, private title: Title) { }

  ngOnInit() {
    this.options = this.dataService.getOptions();
    this.title.setTitle("Kit-Options");
  }



next(){
  this.workService.updateOption(this.options[this.selection]);
  this.router.navigate(['kitdashboard']);
}
}
