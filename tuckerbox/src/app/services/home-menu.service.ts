import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeMenuService {

  url = "https://www.tuckerbox.com.au/workApi/getHomeMenu.php";
  commonDataUrl = "https://www.tuckerbox.com.au/workApi/getPropertyDetail.php";
  homeSliderUrl = "https://www.tuckerbox.com.au/workApi/getHomeSlider.php";
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
