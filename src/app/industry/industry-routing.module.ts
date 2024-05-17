import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShellIndustryComponent } from './components/shell-industry/shell-industry.component';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { BankingFinanceComponent } from './components/banking-finance/banking-finance.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { RetailComponent } from './components/retail/retail.component';
import { MediaComponent } from './components/media/media.component';
import { EducationComponent } from './components/education/education.component';
import { TravelComponent } from './components/travel/travel.component';
import { AutomotiveComponent } from './components/automotive/automotive.component';
import { OilGasComponent } from './components/oil-gas/oil-gas.component';
import { RealEstateComponent } from './components/real-estate/real-estate.component';
import { TelecomComponent } from './components/telecom/telecom.component';
import { FoodBeveragesComponent } from './components/food-beverages/food-beverages.component';
import { EnergyComponent } from './components/energy/energy.component';

const routes: Routes = [
  {
    path: '',
    component: ShellIndustryComponent,
    children: [
      {
        path: 'manufacturing',
        component: ManufacturingComponent,
      },
      {
        path: 'banking-finance',
        component: BankingFinanceComponent,
      },
      {
        path: 'insurance',
        component: InsuranceComponent,
      },
      {
        path: 'healthcare',
        component: HealthcareComponent,
      },
      {
        path: 'retail',
        component: RetailComponent,
      },
      {
        path: 'media',
        component: MediaComponent,
      },
      {
        path: 'education',
        component: EducationComponent,
      },
      {
        path: 'travel',
        component: TravelComponent,
      },
      {
        path: 'automotive',
        component: AutomotiveComponent,
      },
      {
        path: 'oil-gas',
        component: OilGasComponent,
      },
      {
        path: 'real-estate',
        component: RealEstateComponent,
      },
      {
        path: 'telecom',
        component: TelecomComponent,
      },
      {
        path: 'food-beverages',
        component: FoodBeveragesComponent,
      },
      {
        path: 'energy',
        component: EnergyComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IndustryRoutingModule {}
