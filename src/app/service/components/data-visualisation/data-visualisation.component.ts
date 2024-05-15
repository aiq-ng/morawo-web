import { Component } from '@angular/core';

@Component({
  selector: 'app-data-visualisation',
  templateUrl: './data-visualisation.component.html',
  styleUrls: ['./data-visualisation.component.css'],
})
export class DataVisualisationComponent {
  benefit: any = [
    'Instantly identify performance towards goals',
    'Take calculated risks',
    'Find anomalies and errors',
    'Gives edge over the competition',
    'Guide on next action',
    'Get notifications on drastic changes of situation',
    'Point out changing trends and customer requirements',
  ];


  solution: any = [
    'Dashboard Designing',
    'Visual Reporting & Analyzing',
    'Interactive Business Intelligence Applications',
    'Data Visualization from Any Source',
    'Geovisualization',
  ];

  tools: any = [
    'ElasticSearch Kibana',
    'Kyubit BI',
    'Pentaho',
    'Sisense',
    'Microsoft Excel',
    'Custom front-end environment',
    'Oracle Reports',
    'Tableau',
    'DOMO',
    'Microsoft PowerPivot',
    'JasperReports',
    'MicroStrategy',
    'Oracle Business Intelligence',
    'QlikView',
    'Microsoft Power View',
    'Google Data Studio',
    'Microsoft SQL Server Reporting Services',
    'Microsoft Power BI',
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
