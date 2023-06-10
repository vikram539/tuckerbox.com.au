import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-facilities',
  templateUrl: './facilities.component.html',
  styleUrls: ['./facilities.component.css']
})
export class FacilitiesComponent {
  pageArrayData:any;
  getFacilityServicesData:any;

  constructor(public http:PagesDataService, public pageTitle: Title) {
    http.getFacilityPageDataFun().subscribe((data:any) =>{
      this.pageArrayData = data;
      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
    })
    
    
    http.getFacilityServicesDataFun().subscribe((data) => {
      this.getFacilityServicesData = data;
    })
  }
}
