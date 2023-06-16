import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Lightbox } from 'ngx-lightbox';
import { PagesDataService } from 'src/app/services/pages-data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent {
  public _albums: any = []; 
  pageArrayData: any;

  constructor(private _lightbox: Lightbox, private pagesData:PagesDataService, public pageTitle: Title) {
    pagesData.getGalleryPageDataFun().subscribe((data:any) => {
      this.pageArrayData = data;
      for(let i = 0; i < data.length; i++){
        if(data[i]['text_type'] == 'title'){
          this.pageTitle.setTitle(data[i]['text']);
        }      
      }
    })
    pagesData.getGalleryPageImgFun().subscribe((data:any) => {
      
      for(let i = 0; i < data.length; i++) {
       
          let dirName = data[i].pagename;        

          dirName = dirName.replace(/\s/g, "-").toLowerCase();
          let imgName = data[i]['small_img'];
          
          const src = 'https://www.tuckerbox.com.au/images/'+dirName+'/'+imgName; 
          const caption = data[i].pagename; 
          const thumb = 'https://www.tuckerbox.com.au/images/'+dirName+'/'+imgName; 
          const album = { src: src, caption: caption, thumb: thumb }; 
    
          this._albums.push(album); 
        } 
    })
  } 
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }
  
  open(index: number): void { // open lightbox 
  this._lightbox.open(this._albums, index); 
  } 
  
  close(): void { // close lightbox programmatically 
  this._lightbox.close(); 
  }

}
