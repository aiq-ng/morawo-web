import { Component } from '@angular/core';

@Component({
  selector: 'app-microsoft-bi',
  templateUrl: './microsoft-bi.component.html',
  styleUrls: ['./microsoft-bi.component.css'],
})
export class MicrosoftBiComponent {
  benefit: any = [
    'Data-Driven Decision Making',
    'Gain Real-time Business',
    'Advanced Analytics',
    'Large Volume of Data',
    'Faster Result',
    'Secure Approach',
  ];

  services: any = [
    'Power BI Mobile',
    'Power BI Embedded',
    'Power BI Desktop',
    'Power BI Pro',
    'Power BI Datasets',
    'Power BI Report Server',
    'Power BI Consulting Team',
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
