import { Component } from '@angular/core';

@Component({
  selector: 'app-insurance',
  templateUrl: './insurance.component.html',
  styleUrls: ['./insurance.component.css'],
})
export class InsuranceComponent {
  benefits: any = [
    {
      mainText: 'Liability insurance',
      text: `Throughout your work activity as an entrepreneur, you carry out different tasks that carry certain risks. These can cause damage to third parties that you will have to assume and face, which will ultimately result in loss of personal assets. To avoid these unpleasant and conflictive situations, there is civil liability insurance. With this mandatory insurance for companies you protect your business against possible damages or civil errors.`,
    },
    {
      mainText: 'Group accident insurance',
      text: `Collective accident insurance is mandatory when the company has workers hired and registered. It is usually a policy linked to the company's collective agreement and it establishes the compensation and coverage that will be carried. Group accident insurance offers coverage for accidents, permanent disability or death of the worker and is updated annually considering the average annual number of workers.`,
    },
    {
      mainText: 'Multi-Risk Insurance',
      text: `With this type of policy, you can combine everything you need. Protection of your premises, coverage for damages, theft or fire, damages caused by neighbours, damages suffered in the stored merchandise.`,
    },
    {
      mainText: 'Insurance for company vehicles',
      text: `If your workers need a company vehicle to carry out their activity, vehicle insurance will cover any traffic accident.`,
    },
  ];
}
