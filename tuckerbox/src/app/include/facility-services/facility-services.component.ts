import { Component } from '@angular/core';
import { HomeMenuService } from 'src/app/services/home-menu.service';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-facility-services',
  templateUrl: './facility-services.component.html',
  styleUrls: ['./facility-services.component.css']
})
export class FacilityServicesComponent {
  getReceptionData:any;
  getFacilityIconsData:any;
  receptionObj:any = [];
  newArray:any;

  singleDataArray:any;
  
  constructor(public getPageApiData:PagesDataService, private menuDataService:HomeMenuService ) { 
    getPageApiData.getFacilityIconsDataFun().subscribe((data) => {
      this.getFacilityIconsData = data;
      // console.warn(this.getFacilityIconsData);
    })
    getPageApiData.getReceptionDataFun().subscribe((data) => {
      this.getReceptionData = data;
      // console.warn("Facility services", this.getReceptionData);
    })

    menuDataService.commonData().subscribe((data) =>{
      this.singleDataArray = data;
    })
  }

  ngOnInit(): void {
  }
}
