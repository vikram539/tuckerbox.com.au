import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-our-motel',
  templateUrl: './our-motel.component.html',
  styleUrls: ['./our-motel.component.css']
})
export class OurMotelComponent {
  pageArrayData:any;

  gardencitymotorinn:any;
  gardencitymotorinnImg:any;
  gardencitymotorinnName:any;

  tumutvalleymotel:any;
  tumutvalleymotelImg:any;
  tumutvalleymotelName:any;

  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
  constructor(public homePageApiData:PagesDataService, public pageTitle: Title) { 
    homePageApiData.getOurMotelPageDataFun().subscribe((data:any) => { 
      this.pageArrayData = data;
      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
    }) }

  ngOnInit(): void {
    
    this.homePageApiData.gardencitymotorinnDataFun().subscribe((data:any) => {
      this.gardencitymotorinn = data;
        // console.warn(this.gardencitymotorinnName);
     });
     this.homePageApiData.gardencitymotorinnImgFun().subscribe((data:any) => {
        // console.warn(data['pagename']);
       this.gardencitymotorinnImg = data;
       this.gardencitymotorinnName = data[0]['pagename'].replace(/\s/g, '-').toLowerCase()          
      });

      this.homePageApiData.tumutvalleymotelDataFun().subscribe((data:any) => {
        this.tumutvalleymotel = data;
          // console.warn(this.tumutvalleymotelName);
       });
       this.homePageApiData.tumutvalleymotelImgFun().subscribe((data:any) => {
          // console.warn(data['pagename']);
         this.tumutvalleymotelImg = data;
         this.tumutvalleymotelName = data[0]['pagename'].replace(/\s/g, '-').toLowerCase()          
        });
  }
}
