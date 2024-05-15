import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShellServiceComponent } from './components/shell-service/shell-service.component';
import { DataScienceComponent } from './components/data-science/data-science.component';
import { ServiceRoutingModule } from './service-routing.module';

@NgModule({
  declarations: [ShellServiceComponent, DataScienceComponent],
  imports: [CommonModule, SharedModule, ServiceRoutingModule, RouterModule],
})
export class ServiceModule {}
