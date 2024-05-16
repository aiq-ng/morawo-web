import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellServiceComponent } from './components/shell-service/shell-service.component';
import { DataScienceComponent } from './components/data-science/data-science.component';
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

const routes: Routes = [
  {
    path: '',
    component: ShellServiceComponent,
    children: [
      {
        path: 'data-science',
        component: DataScienceComponent,
      },
      {
        path: 'data-visualisation',
        component: DataVisualisationComponent,
      },
      {
        path: 'data-warehouse',
        component: DataWarehouseComponent,
      },
      {
        path: 'data-analytics',
        component: DataAnalyticsComponent,
      },
      {
        path: 'iot-analytics',
        component: IotAnalyticsComponent,
      },
      {
        path: 'customer-service',
        component: CustomerServiceComponent,
      },
      {
        path: 'predictive-analytics',
        component: PredictiveAnalyticsComponent,
      }, 
      {
        path: 'data-migration',
        component: DataMigrationComponent,
      },
      {
        path: 'devops-service',
        component: DevopsServiceComponent
      },
      {
        path: 'microsoft-bi',
        component: MicrosoftBiComponent
      },
      {
        path: 'qlink-sense',
        component: QlinkSenseComponent
      },
      {
        path: 'big-data',
        component: BigDataComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ServiceRoutingModule {}
