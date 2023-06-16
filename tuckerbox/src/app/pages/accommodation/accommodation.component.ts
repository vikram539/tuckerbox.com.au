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

  // roomTwo:any = [];
  // roomTwoImges:any = [];

  // roomThree:any = [];
  // roomThreeImges:any = [];

  // roomFour:any = [];
  // roomFourImges:any = [];

  // roomFive:any = [];
  // roomFiveImges:any = [];

  // roomSix:any = [];
  // roomSixImges:any = [];

  pagesData:any;
  proDetailData:any;
  pagesImg:any;
  roomTypeArray:any[] = [];
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
      console.warn("Room Page data", data.length);
        for(let i = 0; i < data.length; i++){
          this.roomTypeArray.push({"roomId":data[i]['page_ID'], "roomText":[]});      
        } 
  
        this.httpServices.getPagesData().subscribe((data:any) =>{
          this.pagesData = data;
  
          // get rooms data
          for(let i = 0; i < data.length; i++){
            var parentPageId =  parseInt(data[i].page_ID);  
            for(let j = 0; j < this.roomTypeArray.length; j++){
              var roomId = parseInt(this.roomTypeArray[j].roomId);  
              if(parentPageId == roomId){ 
                  this.roomTypeArray[j].roomText.push(data[i]);
              }
            }
          }
          // console.warn(this.roomTypeArray);
        })
        
      // Room Images
      this.roomListData.getAllRoomsImgUrlFun().subscribe((data:any) => { 
        this.pagesImg = data; 
        
        console.warn(this.pagesImg) ;   
      })
    })
  }
}
