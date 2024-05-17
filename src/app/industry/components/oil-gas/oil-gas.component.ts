import { Component } from '@angular/core';

@Component({
  selector: 'app-oil-gas',
  templateUrl: './oil-gas.component.html',
  styleUrls: ['./oil-gas.component.css']
})
export class OilGasComponent {
  benefits: any = [
    {
      mainText: 'Personalization of services and products',
      text: `With an exhaustive knowledge of our customers and those we may have in the future, we can also adapt our business strategy, prevent changes in trends and orient our products towards customization.`
    },
    {
      mainText: ' Immediacy of the service',
      text: `Data analytics enables the possibility of real-time measurements. Having almost immediate data on the traffic on the web, the most visited products or the latest purchases, together with all the analysis of the consumption habits of the customers or potential customers, will allow businesses to react faster to the customers. Businesses need to detect and offer a specific product or service under special or more personalized conditions.`
    },
    {
      mainText: 'Improving marketing strategy',
      text: `Being clear about the needs of the current or future clients will also help businesses when drawing up their strategy. This can lead to adjustments in products and services and the way they are marketed, or in the generation of knowledge for new products and services that fit the needs detected.`
    },
    {
      mainText: 'More efficient productivity',
      text: `Internally, the company's technology must be able to extract data on how products are made. In the case of physical products, having devices that offer information on the production times of each process until the final product is produced is of great value.
 
      Analyzing the data, businesses will see the production phases, the main difficulties, what to improve and streamline and optimize productivity to be more efficient.`
    },
  ];
}
