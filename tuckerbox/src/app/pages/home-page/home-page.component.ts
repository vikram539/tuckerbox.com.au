import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
  pageArrayData:any;
  
  locationPageArray:any;
  locationPageImgArray:any;
  LocationRoomName:any;
  
  constructor(public homePageApiData:PagesDataService, public pageTitle: Title) { 
    homePageApiData.getHomePageDataFun().subscribe((data:any) => { 
      this.pageArrayData = data;
      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
    })
    
  }

  ngOnInit(): void {
    this.homePageApiData.getLocationPageDataFun().subscribe((data:any) =>{
      this.locationPageArray = data;
    })
    
    this.homePageApiData.getLocationPageImgDataFun().subscribe((data:any) =>{
      this.locationPageImgArray = data;   
      this.LocationRoomName = data[0]['pagename'].replace(/\s/g, '-').toLowerCase()   
    })
  }

}
