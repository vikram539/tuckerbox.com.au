import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PagesDataService {
  // All Page Data
  pageDataUrl = "https://www.tuckerbox.com.au/workApi/getAllPagesData.php";

  // Home Page Data
  HomePageUrl = "https://www.tuckerbox.com.au/workApi/getHomeData.php";

  // Reception Hours
  receptionApiUrl = "https://www.tuckerbox.com.au/workApi/getReceptionHours.php";

  // Facility Icons
  faciltyIconApiUrl = "https://www.tuckerbox.com.au/workApi/getFacilityIcons.php";

  // Facility Page
  faciltyPageApiUrl = "https://www.tuckerbox.com.au/workApi/getFacilityPage.php";

  // Facility Page
  faciltyServicesApiUrl = "https://www.tuckerbox.com.au/workApi/getFacilityervices.php";

  // Facility Page
  locationPageApiUrl = "https://www.tuckerbox.com.au/workApi/getLocationPage.php";

  // Location Page
  locationPageImgApiUrl = "https://www.tuckerbox.com.au/workApi/getLocationPageImg.php";

  // Accommodation Page
  accommodationPageImgApiUrl = "https://www.tuckerbox.com.au/workApi/getAccommodationPage.php";

  // Accommodation Page
  GalleryPageApiUrl = "https://www.tuckerbox.com.au/workApi/getGalleryData.php";
  GalleryPageImgApiUrl = "https://www.tuckerbox.com.au/workApi/getGalleryImg.php";
  
  // Faq Page
  FaqPageApiUrl = "https://www.tuckerbox.com.au/workApi/getfaqData.php";

  // Contact Page
  ContactPageApiUrl = "https://www.tuckerbox.com.au/workApi/getContactData.php";

  // Our Motel Page
  OurMotelPageApiUrl = "https://www.tuckerbox.com.au/workApi/getOurMotelData.php";
  
  // Accommodation Page
  gardencitymotorinnApiUrl = "https://www.tuckerbox.com.au/workApi/gardenCityMotorInnData.php";
  gardencitymotorinnImgApiUrl = "https://www.tuckerbox.com.au/workApi/gardenCityMotorInnImg.php";  
  
  // Accommodation Page
  tumutvalleymotelApiUrl = "https://www.tuckerbox.com.au/workApi/tumutValleyMotelData.php";
  tumutvalleymotelImgApiUrl = "https://www.tuckerbox.com.au/workApi/tumutValleyMotelImg.php";

  // Dining & Attraction Page
  diningApiUrl = "https://www.tuckerbox.com.au/workApi/getDiningPageData.php";
  
  // Dining & Attraction Page
  attractionsApiUrl = "https://www.tuckerbox.com.au/workApi/getDiningAttractions.php";

  ourMotelsApiUrl = "https://www.tuckerbox.com.au/workApi/ourMotelsData.php";
  
  constructor(public http:HttpClient) { }

  getPagesData = () =>{
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

  ourMotelfun = () => {
    return this.http.get(this.ourMotelsApiUrl);
  }
}
