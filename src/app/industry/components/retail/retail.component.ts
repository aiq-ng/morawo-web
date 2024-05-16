import { Component } from '@angular/core';

@Component({
  selector: 'app-retail',
  templateUrl: './retail.component.html',
  styleUrls: ['./retail.component.css'],
})
export class RetailComponent {
  reasons: any = [
    {
      mainText: 'Price optimization',
      text: `With big data, stores understand exactly when and how product prices need to change to attract customers and drive sales. By monitoring big data and adjusting prices, companies can determine which strategies benefit both the consumer and the store. This balance is essential, as a higher price could potentially increase profits but decrease customer retention, and vice versa.`,
    },
    {
      mainText: 'Business strategies',
      text: `Big decisions require big data that provides insight into the retail market and emerging trends. Stores that consistently monitor and aggregate information can improve their decision-making and overall strategy development, both in the short and long term.`,
    },
    {
      mainText: 'Customer experience',
      text: `Consumer preferences are always changing in response to the economic climate, technological advancements, and market trends. This means that retailers must be able to monitor and tailor their customer service accordingly.`,
    },
    {
      mainText: 'Product recommendation',
      text: `When retailers collect customer data, they can also personalize advertisements, emails, and promotions to increase sales. By monitoring purchase histories, stores can generate product recommendations to encourage impulse purchases.`,
    },
    {
      mainText: 'Predictive analytics',
      text: `Establishments that integrate their management systems can forecast sales and customer demand through predictive analytics. This technique aggregates sales and historical data in real-time to define fluctuating trends in consumer demand. Retailers can use this data to mitigate emerging risks, capitalize on passing fads, and optimize inventory management. `,
    },
    {
      mainText: 'Supply chain management',
      text: `Supply chain management is challenging, especially for multi-store retailers. Every business in the retail industry faces a certain level of risk, from inventory control to logistics. However, big data allows owners to optimize their supply chain network to mitigate threats and avoid disruptions.`,
    },
  ];
}
