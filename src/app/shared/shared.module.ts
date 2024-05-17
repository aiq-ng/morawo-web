import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { OurServiceComponent } from './components/our-service/our-service.component';

import { CommonModule } from '@angular/common';
import { OurIndustriesComponent } from './components/our-industries/our-industries.component';
import { FooterComponent } from './components/footer/footer.component';
import { OurTechnologiesComponent } from './components/our-technologies/our-technologies.component';
import { OurApproachComponent } from './components/our-approach/our-approach.component';
import { HomeContentsComponent } from './components/home-contents/home-contents.component';
import { OurArticlesComponent } from './components/our-articles/our-articles.component';
import { FaqComponent } from './components/faq/faq.component';
import { CustomCarouselComponent } from './components/custom-carousel/custom-carousel.component';
import { HomeCarouselComponent } from './components/home-carousel/home-carousel.component';

@NgModule({
  declarations: [
    HeaderComponent,
    OurServiceComponent,
    OurIndustriesComponent,
    FooterComponent,
    OurTechnologiesComponent,
    OurApproachComponent,
    HomeContentsComponent,
    OurArticlesComponent,
    FaqComponent,
    CustomCarouselComponent,
    HomeCarouselComponent,
  ],
  imports: [RouterModule, CommonModule],
  providers: [],
  exports: [
    HeaderComponent,
    OurServiceComponent,
    OurIndustriesComponent,
    FooterComponent,
    OurTechnologiesComponent,
    OurApproachComponent,
    HomeContentsComponent,
    OurArticlesComponent,
    FaqComponent,
    CustomCarouselComponent, HomeCarouselComponent
  ],
})
export class SharedModule {}
