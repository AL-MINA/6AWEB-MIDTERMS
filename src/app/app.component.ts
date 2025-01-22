import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { interval } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { MyserviceService } from './myservice.service';
import { NewCmpComponent } from './new-cmp/new-cmp.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, NewCmpComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ng-pipes-demo';
  presentDate = new Date();
  time$ = interval(1000).pipe(
    map(() => new Date())
  );

  testObject = {
    name: 'Almina Tanglao',
    age: 21,
    food: 'Pizza'
  };

  price : number = 2000;

  Fruits = ['Apple', 'Orange', 'Grapes', 'Mango', 'Kiwi', 'Pomegranate'];

  decimalNum1: number = 8.7589623;
  decimalNum2: number = 5.43;

  amount = 123.45;
  company = 'mina corporation';
  purchasedOn = '2025-01-15';


todaydate;
componentproperty;
constructor(private myservice:MyserviceService) {
  this.todaydate = this.myservice.showTodayDate ()
  this.componentproperty = this.myservice.serviceproperty;
 }
}
