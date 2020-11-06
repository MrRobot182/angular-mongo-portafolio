import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public sliderWidth: number;
  public loaded: boolean;

  constructor() { 
  }

  ngOnInit(): void {
  }

  sliderLoad(){
    this.loaded = true; 
  }

  sliderUnload(){
    this.loaded = false; 
  }

  getAuthor(event){
    console.log(event);
  }
}
