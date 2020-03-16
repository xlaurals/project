import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { WorkService } from '../work.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projectreasons',
  templateUrl: './projectreasons.component.html',
  styleUrls: ['./projectreasons.component.scss']
})
export class ProjectreasonsComponent implements OnInit {
  reasons: string[];
  selection: number;

  constructor(private dataService: DataService,
    private workService: WorkService,
    private router: Router, private title: Title) { }

  ngOnInit() {
    this.reasons = this.dataService.getReasons();
    this.title.setTitle("Project-Reasons");
  }

  next(){
    this.workService.updateReason(this.reasons[this.selection]);
    this.router.navigate(['kitoptions']);
    
  }

}
