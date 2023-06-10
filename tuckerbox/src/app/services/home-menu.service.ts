import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {

  url = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getHomeMenu.php";
  commonDataUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getPropertyDetail.php";
  homeSliderUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getHomeSlider.php";
  constructor(public http:HttpClient) {     
  }
  
  menuData = () =>{
    return this.http.get(this.url);
  }
  commonData = () =>{
    return this.http.get(this.commonDataUrl);
  }
  homeSlider = () =>{
    return this.http.get(this.homeSliderUrl);
  }
}
