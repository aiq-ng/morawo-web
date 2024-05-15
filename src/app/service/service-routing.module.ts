import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellServiceComponent } from './components/shell-service/shell-service.component';
import { DataScienceComponent } from './components/data-science/data-science.component';

const routes: Routes = [
  {
    path: '',
    component: ShellServiceComponent,
    children: [
      {
        path: 'data-science',
        component: DataScienceComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
