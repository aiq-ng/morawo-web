import { Component } from '@angular/core';

@Component({
  selector: 'app-data-migration',
  templateUrl: './data-migration.component.html',
  styleUrls: ['./data-migration.component.css'],
})
export class DataMigrationComponent {
  types: any = [
    'Storage Migration',
    'Database Migration',
    'Application Migration',
    'Cloud Migration',
  ];
  benefits = [
    'Adopt Smarter Software & Systems',
    'Aid Custom Reports Over the Data Warehouse',
    'Helps in Resolving Anomalies and Errors in the Current System',
    'Help in Acquisition And Alliances',
  ];

  expertise: any = [
    {
      main: 'Software Migration Services',
      text: 'We provide migration services for enterprise-class apps, servers, operating systems, databases, websites, and IT infrastructures.',
    },
    {
      main: 'Website Migration Services',
      text: 'We  present website migration services for businesses whose sites currently require bandwidth, advanced functionality or are housed by poor or collapsed web hosts. ',
    },
    {
      main: 'Cloud Migration Services',
      text: 'To better strengthen organizations data and take benefit of big data web services, we perform cloud-to-cloud and on-premises server-to-cloud migrations, transferring assets to the public, private or hybrid cloud environments.',
    },
    {
      main: 'Database Migration Services',
      text: 'We process custom services for migrating databases to new servers. We migrate various data types, as well as business logic schemas by using ETL (extract-transform-load).',
    },
    {
      main: 'Server Migration Services',
      text: 'We implement server migration solutions for several middleware components.',
    },
    {
      main: 'Enterprise Platform Migration Services',
      text: 'Our developers perform fast upgrades for legacy enterprise platforms and migrate all data and business logic to new platforms.',
    },
  ];

  cases: any = [
    'Data Migration From on-prem to Cloud Solutions',
    'Upgrade Systems to New System/Software',
    'Brand Mergers',
    'Analyze and Monitor Available Data in The Warehouse',
  ];

  tools = [
    'CloverETL',
    'Snaplogic',
    'Fivetran',
    'Matillion',
    'Alooma',
    'Middleware',
    'Pentaho',
  ];
}
