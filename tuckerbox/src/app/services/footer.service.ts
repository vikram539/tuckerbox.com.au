import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  footerMenuApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getFooterMenus.php";
  
  constructor(private httpRequest: HttpClient) { }
  
  getFooterMenFun = () =>{
    return this.httpRequest.get(this.footerMenuApiUrl);
  }
}
