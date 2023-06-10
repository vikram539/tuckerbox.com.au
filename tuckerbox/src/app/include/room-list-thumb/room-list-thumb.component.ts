import { Component } from '@angular/core';
import { AccommodationsService } from 'src/app/services/accommodations.service';

@Component({
  selector: 'app-room-list-thumb',
  templateUrl: './room-list-thumb.component.html',
  styleUrls: ['./room-list-thumb.component.css']
})
export class RoomListThumbComponent {
  roomOneImges:any = [];
  roomOne:any = [];

  roomTwoImges:any = [];
  roomTwo:any = [];

  roomThreeImges:any = [];
  roomThree:any = [];

  constructor(public roomListData:AccommodationsService) 
  {}

  ngOnInit(): void {
    this.roomListData.getAllRoomsUrlFun().subscribe((data:any) => { 
      for(let i = 0; i < data.length; i++){
        if(data[i]['page_ID'] == 9){
          this.roomOne.push(data[i]);
        }
        else if(data[i]['page_ID'] == 11){
          this.roomTwo.push(data[i]);
        }
        else if(data[i]['page_ID'] == 10){
          this.roomThree.push(data[i]);
        }
      }
    })

  // Room Images
    this.roomListData.getAllRoomsImgUrlFun().subscribe((data:any) => { 

      for(let i = 0; i < data.length; i++){
        if(data[i]['page_id'] == 9){
          this.roomOneImges.push(data[i]);
        }
        else if(data[i]['page_id'] == 11){
          this.roomTwoImges.push(data[i]);
        }
        else if(data[i]['page_id'] == 10){
          this.roomThreeImges.push(data[i]);
          // console.warn(this.roomThreeImges)
        }
      }    
    })
  }
}
