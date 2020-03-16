import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { ProjectKit } from './projectKit.model';
import { User } from './user.model';
import { Work } from './work.model';
import {Location} from './location.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor() { }

  getReasons(): string[] {
    return [
      'IT-Projekt',
      'IS-Projekt',
      'Private Nutzung',
      'Technik Projekt'
    ];
  }
  getOptions() :string[]{
    return[
      'LittleBits',
      'Roboter',
      "CodeKit"
    ];
  }
  getProjectKit(): ProjectKit[] {
    return [
     { name: 'LittleBits',
     kitId: '1',
     bits: 5
    },
      {
        name: 'CodeKit',
      kitId: '2',
    bits: 10},
      {name: 'Roboter',
    kitId: '3',
  bits: 20},
      {
        name: 'Star wars',
      kitId: '4',
    bits:25
  }
    ];
  }
  getRecentProjects(): Work[] {
    return [
      {
        
        id: "test1",
       start: new Date(),
        end: new Date(),
        user: "laura",
        reason: this.getReasons()[1],
        location: new Location(),   
        projectKit: this.getProjectKit()[1],
        option: this.getOptions()[1],

      },
      {
        id: "test2",
        start: new Date(),
         end: new Date(),
         user: "nicole",
         reason: this.getReasons()[2],
         location: new Location(),   
         projectKit: this.getProjectKit()[2],
         option: this.getOptions()[2],
        
      },
      {
        id: "test3",
        start: new Date(),
         end: new Date(),
         user: "nicole",
         reason: this.getReasons()[3],
         location: new Location(),   
         projectKit: this.getProjectKit()[3],
         option: this.getOptions()[3]
      
      },
  
    ];
  }
  /*getUsers(): User[] {
    return[
      {
        matrikelnumber: '318562',
        prename: 'laura',
        name: 'lindberg',
        studydegree: 'DEM',
        faculty: 'Business',
        reason: this.getReasons[2],
    
      },
      {
        matrikelnumber: '318563',
        prename: 'nicole',
        name: 'lindberg',
        studydegree: 'WING',
        faculty: 'Technik',
        projectReason: this.getReasons[4],
    
      }

    ]
  }*/
  
 
  
   
  }

