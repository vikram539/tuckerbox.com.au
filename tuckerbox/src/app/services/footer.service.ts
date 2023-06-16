import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  footerMenuApiUrl = "https://www.tuckerbox.com.au/workApi/getFooterMenus.php";
  
  constructor(private httpRequest: HttpClient) { }
  
  getFooterMenFun = () =>{
    return this.httpRequest.get(this.footerMenuApiUrl);
  }
}
