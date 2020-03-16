import { Component, OnInit } from '@angular/core';
import { WorkService } from '../work.service';
import { Router } from '@angular/router';
import { ProjectKit } from '../projectKit.model';
import { User } from '../user.model';
import { Title } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';


declare var ol: any;
@Component({
  selector: 'app-in-project',
  templateUrl: './in-project.component.html',
  styleUrls: ['./in-project.component.scss']
})
export class InProjectComponent implements OnInit {
  
  reason = new FormControl('');

  reasons: string[];

  constructor(private workService: WorkService, private dataService: DataService,
    private router: Router, private title: Title
  ) { }
  
  elapsedTimeInSeconds: number;

  user: string;

  ngOnInit() {
    this.elapsedTimeInSeconds = 0;
    let currentWork= this.workService.get();
    this.user = currentWork.user;
    this.reasons = this.dataService.getReasons();
    this.reason.setValue(currentWork.reason);
   
    this.title.setTitle("In-Project");
    this.simulate();
  }

    simulate() {
      setTimeout(()=> {
        this.elapsedTimeInSeconds = this.elapsedTimeInSeconds + 1;
       
        this.simulate();
      }, 1000);
    }

    end(){
      this.router.navigate(['endproject']);
    }
  

}
