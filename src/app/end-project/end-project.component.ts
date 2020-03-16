import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { WorkService } from '../work.service';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser'

@Component({
  selector: 'app-end-project',
  templateUrl: './end-project.component.html',
  styleUrls: ['./end-project.component.scss']
})
export class EndProjectComponent implements OnInit {
  reason = new FormControl('');
  endTime = new FormControl('');
  reasons: string[];
  
  
  constructor(private workService: WorkService,
    private dataService: DataService,
    private router: Router, private title: Title

    ) { }

    ngOnInit() {
      this.reasons = this.dataService.getReasons();
      let currentWork = this.workService.get();
      this.reason.setValue(currentWork.reason);
      this.endTime.setValue(currentWork.end);
      this.title.setTitle("End-Project");
    }
    save(){
      this.workService.updateReason(this.reason.value);
      this.router.navigate(['dashboard']);  
      this.workService.updateEnd(this.endTime.value);
      //console.log('final project');
      //console.log(this.workService.get());
    }

}
