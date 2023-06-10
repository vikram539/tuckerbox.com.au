import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccommodationsService } from 'src/app/services/accommodations.service';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-accommodation',
  templateUrl: './accommodation.component.html',
  styleUrls: ['./accommodation.component.css']
})
export class AccommodationComponent {
  slideConfig = { slidesToShow: 1, slidesToScroll: 1, autoplay: true };

  pageArrayData:any;

  roomOne:any = [];
  roomOneImges:any = [];

  roomTwo:any = [];
  roomTwoImges:any = [];

  roomThree:any = [];
  roomThreeImges:any = [];

  roomFour:any = [];
  roomFourImges:any = [];

  roomFive:any = [];
  roomFiveImges:any = [];

  

  constructor(public httpServices: PagesDataService, public roomListData:AccommodationsService, public pageTitle: Title) 
  {
    
  }

  ngOnInit(): void {
    this.httpServices.getaccommodationPageDataFun().subscribe((data:any) => { 
      this.pageArrayData = data;

      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
      
    })
   
    this.roomListData.getAllRoomsUrlFun().subscribe((data:any) => { 
      for(let i = 0; i < data.length; i++){
        if(data[i]['page_ID'] == 9){
          this.roomOne.push(data[i]);
        }
        else if(data[i]['page_ID'] == 10){
          this.roomTwo.push(data[i]);
        }
        else if(data[i]['page_ID'] == 11){
          this.roomThree.push(data[i]);
        }
        else if(data[i]['page_ID'] == 12){
          this.roomFour.push(data[i]);
        }
        else if(data[i]['page_ID'] == 13){
          this.roomFive.push(data[i]);
        }
        else{

        }
      }
    })

// Room Images
    this.roomListData.getAllRoomsImgUrlFun().subscribe((data:any) => { 

      for(let i = 0; i < data.length; i++){
        if(data[i]['page_id'] == 9){
          this.roomOneImges.push(data[i]);
        }
        else if(data[i]['page_id'] == 10){
          this.roomTwoImges.push(data[i]);
        }
        else if(data[i]['page_id'] == 11){
          this.roomThreeImges.push(data[i]);
          // console.warn(this.roomThreeImges)
        }
        else if(data[i]['page_id'] == 12){
          this.roomFourImges.push(data[i]);
        }
        else if(data[i]['page_id'] == 13){
          this.roomFiveImges.push(data[i]);
        }
        else{

        }
      }
    })

  }
}
