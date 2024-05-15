import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServicesComponent } from './services/services.component';
import { BlogComponent } from './blog/blog.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';
import { IndustriesComponent } from './industries/industries.component';
import { IndustriesInfoComponent } from './industries-info/industries-info.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'service',
    loadChildren: () => import("./service/service.module").then((m) => m.ServiceModule),
  },
  {
    path: 'services',
    component: ServicesComponent,
  },
  {
    path: 'blog',
    component: BlogComponent,
  },
  {
    path: 'blog/:blogId',
    component: BlogDetailsComponent,
  },
  {
    path: 'industries',
   component: IndustriesComponent
  },
  {
    path: 'industries/:infoId',
   component: IndustriesInfoComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'top' })],

  exports: [RouterModule],
})
export class AppRoutingModule {}
