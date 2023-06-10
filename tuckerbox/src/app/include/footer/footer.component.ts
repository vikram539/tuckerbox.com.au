import { Component } from '@angular/core';
import { FooterService } from 'src/app/services/footer.service';
import { HomeMenuService } from 'src/app/services/home-menu.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  singleDataArray:any;
  footerMenuObj:any;
  footerPageName:any;
  constructor(private menuDataService:HomeMenuService, private footerData: FooterService) {
    
      // Common data api
   }

  ngOnInit(): void {
    
    this.menuDataService.commonData().subscribe((data:any) =>{
      this.singleDataArray = data;
      // console.warn( this.singleDataArray)
    })

    // footer Data
    this.footerData.getFooterMenFun().subscribe((data:any) => {
      this.footerMenuObj =  data;
      // console.warn(this.footerMenuObj);
    })
  }
}
