import { Component } from '@angular/core';

@Component({
  selector: 'app-food-beverages',
  templateUrl: './food-beverages.component.html',
  styleUrls: ['./food-beverages.component.css'],
})
export class FoodBeveragesComponent {
  dataType: any = [
    {
      mainText: 'Customer service',
      text: 'Through techniques such as language processing, it is possible to categorize customer responses as positive, negative or neutral and with this implement strategies to improve the consumer experience.',
    },
    {
      mainText: 'Quality assurance',
      text: 'For processed foods, maintaining a consistent taste and appearance in all your products is a must. Data Science is responsible for analyzing the factors involved in the above (such as the quantity, quality and storage of ingredients) to prevent possible problems in the quality and safety of food.',
    },
    {
      mainText: 'Operating efficiency',
      text: 'One of the big problems, not only in the food and beverages industry but in the whole world, is the enormous waste of food that happens in these companies. With Data Science and through the algorithms it provides, companies have been able to analyze market trends that are reflected in demand, effects of temperature and storage on the quality of products and other factors that cause food waste. and they mean losses not only for companies but for the planet.',
    },
  ];

  analytics: any = [
    {
      main: 'Finance and accounting',
      content: [
        'Finance Analytics supports forward-looking action and accelerates processes. It helps to ',
        '• Recognize risks in good time',
        '• To interpret performance deviations',
        '• to tap new potential',
        '• Shaping processes',
        '• Identify tax risks.',
      ],
    },
    {
      main: 'Regulation',
      content: [
        'Risk & Regulatory Analytics optimizes risk management and improves the external impact. It helps to',
        '• Identifies deviations from internal and external regulations',
        '• Supports bookkeeping through journal entry testing and statistical tests',
        '• Enables internal control systems as well as fraud detection and prevention using ad-hoc analyzes and continuous monitoring',
        '• Enables the use of anti-trust and data privacy applications',
        '• Supports analyzes of company processes with regard to effectiveness, efficiency and compliance.',
      ],
    },
    {
      main: 'Customer relationships',
      content: [
        'Customer Analytics enables sales maximization through differentiated Customer Relationship Management (CRM). It helps to:',
        '• Identify potential sales opportunities',
        '• Analyze customer behavior and customer relationships efficiently',
        '• Identify customer churn risks in good time',
        '• Initiate targeted marketing campaigns for customer loyalty and new customer acquisition',
        '• Improve products and optimize pricing.',
      ],
    },
    {
      main: 'Human resource management',
      content: [
        'Workforce Analytics supports human resources strategies by',
        '• Processes in personnel management are optimized ',
        '• the recruitment and retention of talent is encouraged',
        '• data-driven decision-making processes (e.g. for employee safety) are supported.',
      ],
    },
    {
      main: 'Sales control',
      content: [
        'Supply chain analytics enables predictions to be made with regard to requirements planning, procurement processes, production and distribution processes. This includes:',
        '• insight into the entire supply chain: from demand to all aspects of sales',
        '• Cost savings in purchasing',
        '• the early detection of potential faults',
        '• well-founded demand forecasts',
        '• optimizing logistics.',
      ],
    },
  ];
}
