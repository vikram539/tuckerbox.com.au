import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { AccommodationsService } from 'src/app/services/accommodations.service';
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

  pagesData: any;
  pagesImg: any;
  motelListData: any;
  motelListDataArray: any[] = [];
  
  slideConfig = { slidesToShow: 1, slidesToScroll: 1 };
  constructor(public homePageApiData:PagesDataService, public pageTitle: Title, public roomListData:AccommodationsService,) { 
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

        // ourMotelfun
        this.homePageApiData.ourMotelfun().subscribe((data:any) => { 
          console.warn(data.length);
            for(let i = 0; i < data.length; i++){
              this.motelListDataArray.push({"roomId":data[i]['page_ID'], "roomText":[]});      
            } 
      
            this.homePageApiData.getPagesData().subscribe((data:any) =>{
              this.pagesData = data;
      
              // get rooms data
              for(let i = 0; i < data.length; i++){
                var parentPageId =  parseInt(data[i].page_ID);  
                for(let j = 0; j < this.motelListDataArray.length; j++){
                  var roomId = parseInt(this.motelListDataArray[j].roomId);  
                  if(parentPageId == roomId){ 
                      this.motelListDataArray[j].roomText.push(data[i]);
                  }
                }
              }
              console.warn(this.motelListDataArray);
            })
        })
    
    // Room Images
        this.roomListData.getAllRoomsImgUrlFun().subscribe((data:any) => { 
          this.pagesImg = data; 
          console.warn(this.pagesImg) ;   
        })
  }
}
