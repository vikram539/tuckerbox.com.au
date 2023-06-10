import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { HomeMenuService } from 'src/app/services/home-menu.service';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  pageArrayData:any;
  singleDataArray: any;
  constructor(public PageApiData:PagesDataService, private commonDataService:HomeMenuService, public pageTitle: Title) { 
    PageApiData.getContactPageDataFun().subscribe((data:any) => { 
      this.pageArrayData = data;
      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
    })

    commonDataService.commonData().subscribe((data) =>{
      this.singleDataArray = data;
      
    })
  }

  ngOnInit(): void {
    
  }
}
