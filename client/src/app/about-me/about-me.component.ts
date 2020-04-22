import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.css']
})
export class AboutMeComponent implements OnInit {
  image: any = ["../../assets/images/MeCollage.jpg", "../../assets/images/BeachCollage.jpg", "../../assets/images/TokyoCollage.jpg", "../../assets/images/EuropeCollage.jpg"]
  constructor() { }

  ngOnInit() {
    this.imageChange();
  }

  counter(){
    let i : number = -1;
    i += 1;
    if(i == this.image.length){
      i == 0;
    }

    

    return i;
  }

  imageChange(){
    setInterval(this.counter, 5000);
    return this.image[this.counter()]
  }

}
