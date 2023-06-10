import { Component } from '@angular/core';
import { HomeMenuService } from 'src/app/services/home-menu.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  getAllData:any;
  getPageName:any;
  singleDataArray:any = [];
  constructor(private menuDataService:HomeMenuService) { 
    
    menuDataService.menuData().subscribe((data:any)=> {
      // for(let i = 0; i < data.length; i++){
      //   this.getPageName = (data[i]['page_name'].replace(/\s/g, "-").toLowerCase());  
      //   this.getPageName.push(this.getPageName)   
      // }
      // console.warn(this.getPageName);
      this.getAllData = data;
      }
    )
    
      // Common data api
      menuDataService.commonData().subscribe((data) =>{
        this.singleDataArray = data;
        // console.warn(this.singleDataArray);
        // for(let i=0; i < this.getCommonData.length; i++){
        //   this.singleDataArray = this.getCommonData[i];
        // }
      })
  }

  ngOnInit(): void {
    $(function(){
      	
      $(document).on("click",".iconWrap", function(){	
        $(this).toggleClass("closeMenu");
        $(".menuItemsWrap").slideToggle();
      })

      $(document).on("click",".primary-link li>a, .top-primary-menu .navbar a.navbar-brand", function(){	
        $(this).closest(".show").removeClass("show");
        
      })
    })
  }

}
