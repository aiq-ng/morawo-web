import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShellServiceComponent } from './components/shell-service/shell-service.component';
import { DataScienceComponent } from './components/data-science/data-science.component';
import { ServiceRoutingModule } from './service-routing.module';
import { DataVisualisationComponent } from './components/data-visualisation/data-visualisation.component';
import { DataWarehouseComponent } from './components/data-warehouse/data-warehouse.component';
import { DataAnalyticsComponent } from './components/data-analytics/data-analytics.component';
import { IotAnalyticsComponent } from './components/iot-analytics/iot-analytics.component';
import { CustomerServiceComponent } from './components/customer-service/customer-service.component';
import { PredictiveAnalyticsComponent } from './components/predictive-analytics/predictive-analytics.component';
import { DataMigrationComponent } from './components/data-migration/data-migration.component';
import { DevopsServiceComponent } from './components/devops-service/devops-service.component';
import { MicrosoftBiComponent } from './components/microsoft-bi/microsoft-bi.component';
import { QlinkSenseComponent } from './components/qlink-sense/qlink-sense.component';
import { BigDataComponent } from './components/big-data/big-data.component';

@NgModule({
  declarations: [ShellServiceComponent, DataScienceComponent, DataVisualisationComponent, DataWarehouseComponent, DataAnalyticsComponent, IotAnalyticsComponent, CustomerServiceComponent, PredictiveAnalyticsComponent, DataMigrationComponent, DevopsServiceComponent, MicrosoftBiComponent, QlinkSenseComponent, BigDataComponent],
  imports: [CommonModule, SharedModule, ServiceRoutingModule, RouterModule],
})
export class ServiceModule {}
