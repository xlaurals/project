import { Injectable } from '@angular/core';
import { Project } from './project.model';
import { Work } from './work.model';
import {ProjectKit} from './projectKit.model';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  private _currentWork: Work

  constructor() { }

  create(work: Work) {
    this._currentWork= work;
  }

get() {
  return this._currentWork;
}
updateUser(user : string) {
  this._currentWork.user=user;
  console.log(this._currentWork);
}
updateReason(reason: string) {
  this._currentWork.reason=reason;
  console.log(this._currentWork);
}
updateOption(option: string) {
  this._currentWork.option=option;
  console.log(this._currentWork);
}
updateEnd(date: Date) {
  this._currentWork.end = date;
}
}




