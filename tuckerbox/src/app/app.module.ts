import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FacilityServicesComponent } from './include/facility-services/facility-services.component';
import { FooterComponent } from './include/footer/footer.component';
import { HeaderComponent } from './include/header/header.component';
import { HomeSliderComponent } from './include/home-slider/home-slider.component';
import { RoomListThumbComponent } from './include/room-list-thumb/room-list-thumb.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { OurMotelComponent } from './pages/our-motel/our-motel.component';
import { LightboxModule } from 'ngx-lightbox';
import { ReplacePipe } from './pipes/replace.pipe';
import { HttpClientModule } from '@angular/common/http';
import { SlickCarouselModule } from 'ngx-slick-carousel';
@NgModule({
  declarations: [
    AppComponent,
    FacilityServicesComponent,
    FooterComponent,
    HeaderComponent,
    HomeSliderComponent,
    RoomListThumbComponent,
    AccommodationComponent,
    ContactComponent,
    FacilitiesComponent,
    GalleryComponent,
    HomePageComponent,
    OurMotelComponent,
    ReplacePipe
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    LightboxModule,
    HttpClientModule,
    SlickCarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
