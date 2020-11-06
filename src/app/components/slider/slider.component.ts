import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() 
  parentWidth: number;
  
  @Output() 
  launch = new EventEmitter();
  
  public contact: any;

  constructor() {
    this.contact = {
      nombre: "Fernando Sánchez",
      twitter: "@fgsl182",
      github: "MrRobot182",
    }
  }

  ngOnInit(): void {

    $('.slider').bxSlider({
      auto: true,
      stopAutoOnClick: true,
      pager: true,
      slideWidth: this.parentWidth
    });
  }

  getEvent(event){
    console.log(event);
    this.launch.emit(this.contact);
  }

}
