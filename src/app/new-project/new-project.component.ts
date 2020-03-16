import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProjectKit } from '../projectKit.model';
import { DataService } from '../data.service';
import { GeocodeService } from '../geocode.service';

import { Project } from '../project.model';
import { Router } from '@angular/router';
import { WorkService } from '../work.service';
import {Work} from '../work.model';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-starttrip',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  reason = new FormControl('');
  reasons: string[];
  user = new FormControl('');
  start = new FormControl('');
  startLocation = new FormControl('');
  project = new FormControl('');
  showScanner =false;

  projectKits: Work[];

  private _newWork: Work;

  constructor(private dataService: DataService, 
              private geocodeService: GeocodeService, 
             
              private workService: WorkService,
              private router: Router, private title: Title) { }

  ngOnInit() {
    this.title.setTitle("New-Project");
   

    this._newWork = {
   user: this.user.value,
   projectKit: this.dataService.getProjectKit[1],
   id: null,
   start: new Date(),
   end:null,
   reason: null,
   location: null,
   option: null
    };

    this.user.setValue(this._newWork.user);
    this.start.setValue(this._newWork.start);
    this.projectKits = this.dataService.getRecentProjects();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
       this._newWork.location = {
          lat: position.coords.latitude,
          lon: position.coords.longitude
        };
        this.geocodeService.getAddressFromCoordinate(position.coords.latitude, position.coords.longitude).subscribe(result => {
          this.startLocation.setValue(result.Response.View["0"].Result["0"].Location.Address.Label);
        });
      });
    }
    
  }
  next(){
   this._newWork.user = this.user.value;
   this._newWork.start= this.start.value;
   this._newWork.projectKit= this.project.value;
   this.workService.create(this._newWork);

    this.router.navigate(['projectreasons']);
 
    }
  
  
  
}
