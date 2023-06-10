import { Component } from '@angular/core';
import { HomeMenuService } from 'src/app/services/home-menu.service';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.css']
})
export class HomeSliderComponent {
  slidesArray:any ;
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true };
  dirName: any;
  constructor(sliderImg:HomeMenuService) { 
    sliderImg.homeSlider().subscribe((data:any) => {
     
      this.dirName = data[0]['pagename'].replace(/\s/g, "-").toLowerCase();
      this.slidesArray = data;
      // console.warn(this.slidesArray);
    })
  }


  ngOnInit(): void {
  }
}
