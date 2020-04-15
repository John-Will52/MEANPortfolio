import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  button ={
    home: 0,
    about: 0,
    resume: 0,
    workshop: 0,
    contact: 0
  }
  
  ngOnInit() {

  }

  homeClicked(){
    this.button.home += 1;
  }
  aboutClicked(){
    this.button.about += 1;
  }
  resumeClicked(){
    this.button.resume += 1;
  }
  workshopClicked(){
    this.button.workshop += 1;
  }
  contactClicked(){
    this.button.contact += 1;
  }


}
