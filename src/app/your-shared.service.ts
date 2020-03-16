import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YourSharedService {
  sharedUser: {
    // your properties here... e.g
    username: 'string'
};
  constructor(private yourSharedService: YourSharedService) { }
}
