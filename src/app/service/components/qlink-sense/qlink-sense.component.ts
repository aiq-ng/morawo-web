import { Component } from '@angular/core';

@Component({
  selector: 'app-qlink-sense',
  templateUrl: './qlink-sense.component.html',
  styleUrls: ['./qlink-sense.component.css'],
})
export class QlinkSenseComponent {
  benefit: any = [
    'Better Data Management',
    'Augmented Visualization of Data',
    'Efficiency Processing',
    'Data Governance',
    'Enhance Performance Monitoring',
    'Consolidate Data Efficiently',
    'Better Perceptibility of All Activity',
    'Easy Access to Data',
    'Improved Insights',
    'Better Decision Making',
  ];

  services: any = [
    'Why Morawo Is The Best Place For QlikView And QlikSense',
    'Cloud Deployment',
    'Qlikview Development Services',
    'Qlikview Embedded Analytics',
    'Data Visualizations Model',
    'Data Visualizations Model',
    'QlikSense Migration', 'Qlik Data Integration', 'Qlikview Web Solutions'
  ]; 

  solutions: any = [
    'Customer Analytics',
    'Ecommerce Analytics',
    'Financial Analytics',
    'Marketing Analytics',
    'HR Analytics',
    'Sales Analytics',
    'Operational and Asset Analytics',
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
