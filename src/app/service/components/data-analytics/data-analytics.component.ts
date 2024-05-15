import { Component } from '@angular/core';

@Component({
  selector: 'app-data-analytics',
  templateUrl: './data-analytics.component.html',
  styleUrls: ['./data-analytics.component.css'],
})
export class DataAnalyticsComponent {
  benefit: any = [
    'Proactivity & Anticipating Needs',
    'Delivering Relevant Products',
    'Optimizing & Improving Customer Experience',
    'Mitigating Risk & Fraud',
    'Personalization & Service',
  ];

  analytics: any = [
    {
      main: 'Data Services',
      content: [
        'Data Architecture Assessment ',
        ' Data Mart and Data Warehouse Consulting',
        'Data Migration and Data Integration',
        'Operational Data Store (ODS) Development',
        'Data Enrichment',
        'Data Mart Building',
        'Data Modeling',
        'Report and Dashboards Development',
        'Data Visualization',
        'Insights-as-a-Service',
      ],
    },
    {
      main: 'Advanced Analytics',
      content: [
        'Scorecard Segmentation',
        'Cluster Analysis',
        'Discrete Choice Modeling',
        'Demand Forecasting',
        'Predictive Modeling',
        'Root Cause Analysis',
        'Big Data Analytics',
        'Logic Regression',
        'Graphic Decision Models',
      ],
    },
    {
      main: 'Data Visualization',
      content: [
        'Data Visualization Consulting',
        'Reporting & Storytelling',
        'Data Visualization Integration',
        'Data Visualization Implementation',
      ],
    },
    {
      main: 'Digital Analytics',
      content: [
        'Digital Analytics Audit',
        'Analytics Consulting',
        'Analytics Implementation',
        'Tag Management System',
        'Analytics Reporting',
      ],
    },
  ];
  solution: any = [
    'Customer Analytics',
    'Ecommerce Analytics',
    'HR Analytics',
    'Marketing Analytics',
    'Performance Analytics',
    'Operational and Asset Analytics',
    'Sales Analytics',
    'Financial Analytics',
    'Industrial analytics',
  ];
}
