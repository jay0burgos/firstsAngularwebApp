import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Joses first angular app';
  //some example of type script 
  // name:string = 'Jose';
  // constructor(){ //will run first and also use typescript to make code more robust
  //   this.changeName('Burgos');
  //   console.log(this.name)
  //   this.title = this.name;
  // }
  // changeName(name:string):void{
  //   this.name = name
  //}
}
