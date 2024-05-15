import { Component } from '@angular/core';

@Component({
  selector: 'app-customer-service',
  templateUrl: './customer-service.component.html',
  styleUrls: ['./customer-service.component.css']
})
export class CustomerServiceComponent {
  benefit: any = [
    'Enhance Sales and Marketing',
    'Time-effective',
    'Predict future trends',
    'Actionable insights',
    'Reduce cost',
    'Dynamic personalization',
    'More Analytics',
  ];

  services: any = [
    'Real-time Analytics',
    'Robust Strategies',
    'Business Intelligence',
    'Campaign Performance',
    'Engaging Model',
    
  ];

  solutions: any = [
    'Customer Analytics',
    'Ecommerce Analytics',
    'Financial Analytics',
    'Marketing Analytics',
    'HR Analytics',
    'Sales Analytics',
    'Operational and Asset Analytics',
    'Industrial analytics',
    'Performance Analytics',
  ];
  reason: any = [
    'Reports Based on Business Role',
    'Hasslefree Filtering of Data',
    'Profound Expertise',
    'Self-Service Reporting',
    'Easy Interpretation of Complex Data',
    'Maintenance and Support',
    'Reduced Dependency on Spreadsheets',
  ];
}
