import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Project } from '../project.model';
import { Title } from '@angular/platform-browser';
import { Work } from '../work.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  recentWorks: Work[];

  constructor(private dataService: DataService,
    private title: Title) { }

  ngOnInit() {
    this.recentWorks = this.dataService.getRecentProjects();
    this.title.setTitle("Dashboard");
  }

} 
