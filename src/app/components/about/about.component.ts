import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  
  public title: string;
  public subtitle: string;
  public email: string;
  
  constructor() { 
    this.title = "Fernando Sánchez";
    this.subtitle = "Estudiante de ingenieria en informatica";
    this.email = "fgsl.182@gmail.com";
  }

  ngOnInit(): void {
  }

}
