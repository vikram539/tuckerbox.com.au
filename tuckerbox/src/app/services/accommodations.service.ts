import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccommodationsService {

  // All Rooms Data
  allRoomsDataUrl = "https://www.tuckerbox.com.au/workApi/allRoomsData.php";
  allRoomsImgDataUrl = "https://www.tuckerbox.com.au/workApi/allRoomsImgData.php";

  constructor(private httpRoom: HttpClient) 
  { }  
  
  // Get standard DeluxeUrl rooms list & Images
  getAllRoomsUrlFun = () =>{
    return this.httpRoom.get(this.allRoomsDataUrl);
  }

  getAllRoomsImgUrlFun = () =>{
    return this.httpRoom.get(this.allRoomsImgDataUrl);
  }
}
