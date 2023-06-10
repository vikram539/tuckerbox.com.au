import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {
  // All Page Data
  pageDataUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getAllPagesData.php";

  // Home Page Data
  HomePageUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getHomeData.php";

  // Reception Hours
  receptionApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getReceptionHours.php";

  // Facility Icons
  faciltyIconApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getFacilityIcons.php";

  // Facility Page
  faciltyPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getFacilityPage.php";

  // Facility Page
  faciltyServicesApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getFacilityervices.php";

  // Facility Page
  locationPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getLocationPage.php";

  // Location Page
  locationPageImgApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getLocationPageImg.php";

  // Accommodation Page
  accommodationPageImgApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getAccommodationPage.php";

  // Accommodation Page
  GalleryPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getGalleryData.php";
  GalleryPageImgApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getGalleryImg.php";
  
  // Faq Page
  FaqPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getfaqData.php";

  // Contact Page
  ContactPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getContactData.php";

  // Our Motel Page
  OurMotelPageApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getOurMotelData.php";
  
  // Accommodation Page
  gardencitymotorinnApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/gardenCityMotorInnData.php";
  gardencitymotorinnImgApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/gardenCityMotorInnImg.php";  
  
  // Accommodation Page
  tumutvalleymotelApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/tumutValleyMotelData.php";
  tumutvalleymotelImgApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/tumutValleyMotelImg.php";

  // Dining & Attraction Page
  diningApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getDiningPageData.php";
  
  // Dining & Attraction Page
  attractionsApiUrl = "https://swaggersmotorinnyass.com.au/Tuckerbox/workApi/getDiningAttractions.php";
  
  constructor(public http:HttpClient) { }

  getPagesData = (id:number) =>{
    return this.http.get(this.pageDataUrl);
  }

  // Get Home Data Method
  getHomePageDataFun = () =>{
    return this.http.get(this.HomePageUrl);
  }

  // Get Reception Hours Data Method
  getReceptionDataFun = () =>{
    return this.http.get(this.receptionApiUrl);
  }

  // Get Facility Icons Data Method
  getFacilityIconsDataFun = () =>{
    return this.http.get(this.faciltyIconApiUrl);
  } 

  // Get Home Data Method
  getFacilityPageDataFun = () =>{
    return this.http.get(this.faciltyPageApiUrl);
  }

  // Get Facility Services Data Method
  getFacilityServicesDataFun = () =>{
    return this.http.get(this.faciltyServicesApiUrl);
  }

  // Get Facility Services Data Method
  getLocationPageDataFun = () =>{
    return this.http.get(this.locationPageApiUrl);
  }
  // Get Facility Services Data Method
  getLocationPageImgDataFun = () =>{
    return this.http.get(this.locationPageImgApiUrl);
  }
  
  // Get Facility Services Data Method
  getaccommodationPageDataFun = () =>{
    return this.http.get(this.accommodationPageImgApiUrl);
  }
  
  // Get Gallery Services Data Method
  getGalleryPageDataFun = () =>{
    return this.http.get(this.GalleryPageApiUrl);
  }
  // Get Facility Services Data Method
  getGalleryPageImgFun = () =>{
    return this.http.get(this.GalleryPageImgApiUrl);
  }  
  
  // Get Gallery Services Data Method
  getFaqPageDataFun = () =>{
    return this.http.get(this.FaqPageApiUrl);
  }

  // Get Gallery Services Data Method
  getContactPageDataFun = () =>{
    return this.http.get(this.ContactPageApiUrl);
  }
  
  // Get Gallery Services Data Method
  getOurMotelPageDataFun = () =>{
    return this.http.get(this.OurMotelPageApiUrl);
  }
  
  // Get gardencitymotorinn Data Method
  gardencitymotorinnDataFun = () =>{
    return this.http.get(this.gardencitymotorinnApiUrl);
  }
  // Get Facility Services Data Method
  gardencitymotorinnImgFun = () =>{
    return this.http.get(this.gardencitymotorinnImgApiUrl);
  } 

  // Get Gallery Services Data Method
  tumutvalleymotelDataFun = () =>{
    return this.http.get(this.tumutvalleymotelApiUrl);
  }
  // Get Facility Services Data Method
  tumutvalleymotelImgFun = () =>{
    return this.http.get(this.tumutvalleymotelImgApiUrl);
  }  
   
  // Get Facility Services Data Method
  diningPageFun = () =>{
    return this.http.get(this.diningApiUrl);
  } 
  // Get Facility Services Data Method
  attractionsPageFun = () =>{
    return this.http.get(this.attractionsApiUrl);
  } 

}
