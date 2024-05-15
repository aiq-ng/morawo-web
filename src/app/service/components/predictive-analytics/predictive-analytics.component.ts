import { Component } from '@angular/core';

@Component({
  selector: 'app-predictive-analytics',
  templateUrl: './predictive-analytics.component.html',
  styleUrls: ['./predictive-analytics.component.css'],
})
export class PredictiveAnalyticsComponent {
  benefit: any = [
    'Gain Deeper Insights Into Data',
    'Boost Business Performance',
    'Understand Customer Well',
    'Identify Trends And Patterns',
    'Drive Strategic Decision-Making',
    'Predict Behavior',
    'Identify Future Trends',
    'Boost Productivity',
    'Understand Customers Better',
  ];

  services: any = [
    'Churn prediction',
    'Customer Segmentation',
    'Dynamic Pricing',
    'Marketing Campaign Optimization',
    'Recommendation system',
    'Lifetime Value Optimization',
    'Credit Scoring',
    'Demand Forecasting',
  ];

  models: any = [
    'Define the Problem',
    'Exploratory Data Analysis',
    'Action',
    'Data Extraction',
    'Data Modeling',
    'Value',
  ];
  predictive_analytics: any = [
    {
      main: 'State of The Art Models',
      text: 'We are always looking for new ways to improve our predictions and get the best possible results.',
    },
    {
      main: 'Customizable Solutions',
      text: 'Our solutions are tailored to fit in with customers’ specific demands and the nature of their data.',
    },
    {
      main: 'Highly Professional Team',
      text: 'They are set to track greatness in everything we do for our clients.',
    },
    {
      main: 'Scalable Results',
      text: 'Our predictive analytics consulting solutions will help to grow your business constantly.',
    },
  ];
}
