import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { SlickCarouselModule } from 'ngx-slick-carousel';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { OurVisionComponent } from './components/our-vision/our-vision.component';
import { OurSolutionComponent } from './components/our-solution/our-solution.component';
import { SharedModule } from './shared/shared.module';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { IndustriesComponent } from './industries/industries.component';
import { IndustriesInfoComponent } from './industries-info/industries-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    OurVisionComponent,
    OurSolutionComponent,
    AboutComponent,
    ServicesComponent,
    BlogComponent,
    BlogDetailsComponent,
    IndustriesComponent,
    IndustriesInfoComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SlickCarouselModule,
    SharedModule,
    CommonModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
