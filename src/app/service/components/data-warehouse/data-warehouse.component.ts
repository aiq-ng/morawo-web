import { Component } from '@angular/core';

@Component({
  selector: 'app-data-warehouse',
  templateUrl: './data-warehouse.component.html',
  styleUrls: ['./data-warehouse.component.css'],
})
export class DataWarehouseComponent {
  benefit: any = [
    'Airline',
    'Public Sector',
    'Investment and Insurance Sector',
    'Banking',
    'Telecommunication',
    'Hospitality Industry',
    'Healthcare',
    'Retain Chain',
  ];
  services: any = [
    {
      main: 'Data Acquisition',
      text: 'At Morawo Data Analytics, we use advanced data gathering, filtering and cleaning algorithms to assure that only high-value data is stored in your data warehouse.',
    },
    {
      main: 'Data Profiling',
      text: 'Analysis of your big data starts with efficient profiling of the data you have received. At Morawo Data Analytics, our experts help you profile the complex data you receive completely so that you can use the data with confidence.',
    },
    {
      main: 'Data Warehouse Maintenance',
      text: 'Morawo Data Analytics use the expertise and follow a structured approach to support your data warehouse so that the analytics environment is available to you at all time.',
    },
    {
      main: 'Automated Backup',
      text: 'At Morawo Data Analytics, our team helps you to take continuous and automatic backup of your critical data so that it can be recovered and used when required.',
    },
    {
      main: 'Data Quality Management',
      text: 'Morawo Data Analytics QA team use a combination of data processing technologies and our data quality management solutions to improve the quality of your data.',
    },
    {
      main: 'Data Federation',
      text: 'Our team uses advanced tools to help you get a unified view of data emerging from various sources and store it in a virtual database to assure data reusability.',
    },
    {
      main: 'Data Transformation',
      text: 'We help simplify and automate the process of data transformation from the large amounts of data collected so that you can turn more data immediately into real-time decisions.',
    },
  ];
}
