import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  showTodayDate() {
    let ndate = new Date();
    return ndate;
  }
  serviceproperty = 'My Service Component';
}
