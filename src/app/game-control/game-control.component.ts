import { Output } from '@angular/core';
import { Component, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
 @Output() intervalfired= new EventEmitter<number>();
  interval;
  last= 0;
  title = 'Assignment4';


  onStartGame(){
    this.interval= setInterval(()=>{
   this.intervalfired.emit(this.last + 1);
   this.last++;
    }, 1000)
  }  

  onPauseGame(){
    clearInterval(this.interval);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
