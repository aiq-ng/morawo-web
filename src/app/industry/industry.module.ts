import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ShellIndustryComponent } from './components/shell-industry/shell-industry.component';
import { IndustryRoutingModule } from './industry-routing.module';
import { ManufacturingComponent } from './components/manufacturing/manufacturing.component';
import { BankingFinanceComponent } from './components/banking-finance/banking-finance.component';
import { InsuranceComponent } from './components/insurance/insurance.component';
import { HealthcareComponent } from './components/healthcare/healthcare.component';
import { RetailComponent } from './components/retail/retail.component';
import { MediaComponent } from './components/media/media.component';
import { EducationComponent } from './components/education/education.component';
import { TravelComponent } from './components/travel/travel.component';
import { AutomotiveComponent } from './components/automotive/automotive.component';

@NgModule({
  declarations: [
    ShellIndustryComponent,
    ManufacturingComponent,
    BankingFinanceComponent,
    InsuranceComponent,
    HealthcareComponent,
    RetailComponent,
    MediaComponent,
    EducationComponent,
    TravelComponent,
    AutomotiveComponent
  ],
  imports: [CommonModule, SharedModule, IndustryRoutingModule,  RouterModule],
})
export class IndustryModule {}
