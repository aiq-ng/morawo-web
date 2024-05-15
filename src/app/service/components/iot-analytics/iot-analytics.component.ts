import { Component } from '@angular/core';

@Component({
  selector: 'app-iot-analytics',
  templateUrl: './iot-analytics.component.html',
  styleUrls: ['./iot-analytics.component.css'],
})
export class IotAnalyticsComponent {
  benefit: any = [
    'Generate Opportunity',
    'Tailor custom insights',
    'Reduce Risk',
    'Leverage models',
    'Fact-based decision making',
    'Improve productivity',
    'Real-time Efficiency',
  ];

  services: any = [
    'Data Quality Assessment',
    'Connectivity Management',
    'IoT Billing',
    'Predictive Analysis',
    'IoT Data Management',
    'Service Execution',
    'Reporting System',
  ];

  solutions: any = [
    'Customer Analytics',
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
