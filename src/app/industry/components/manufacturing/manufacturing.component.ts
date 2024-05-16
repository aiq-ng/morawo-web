import { Component } from '@angular/core';

@Component({
  selector: 'app-manufacturing',
  templateUrl: './manufacturing.component.html',
  styleUrls: ['./manufacturing.component.css'],
})
export class ManufacturingComponent {
  data: any = [
    {
      mainText: '• Optimization of operations',
      text: 'Proper use of big data means that the industry can increase the overall responsiveness of the manufacturing sector, utilize resource capacity to the fullest, gain a clear picture of costs, and also make quick decisions regarding operations.',
    },
    {
      mainText: '• Reduce risks in the supply chain.',
      text: 'Using data from around the world on different political, economic and climate issues, the supply chain pattern can be designed so that there can be an efficient work chain considering all other contingencies.',
    },
    {
      mainText: '• Reduce costs',
      text: 'Using predictive data analytics, industries can now smartly invest in projects that are valuable and also focus on purchasing equipment and machinery that will lower the cost of production and improve overall performance, thereby reducing overall costs.',
    },
    {
      mainText: '• Improve product quality.',
      text: 'By having enough data on customer information about a certain product and how a certain product performs, it can be used to improve quality. Data science is also helpful in customizing products based on consumers and their demographics.',
    },
    {
      mainText: '• After-sales service',
      text: 'Today, marketing is no longer product and manufacturer oriented, it is totally customer oriented as it is not enough to sell a product but also to make sure that the customer receives quality service even after the sale. Through predictive analytics and customer services, the quality of the customer-seller relationship can be improved.',
    },
  ];
}
