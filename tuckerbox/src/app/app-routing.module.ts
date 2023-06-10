import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AccommodationComponent } from './pages/accommodation/accommodation.component';
import { ContactComponent } from './pages/contact/contact.component';
import { FacilitiesComponent } from './pages/facilities/facilities.component';
import { GalleryComponent } from './pages/gallery/gallery.component';
import { OurMotelComponent } from './pages/our-motel/our-motel.component';

const routes: Routes = [
  { path: "", component: HomePageComponent},
  { path: "accommodation", component: AccommodationComponent},
  { path: "facilities", component: FacilitiesComponent},
  { path: "gallery", component: GalleryComponent},
  { path: "contact", component: ContactComponent},
  { path: "our-motels", component: OurMotelComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabledBlocking'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
