import { Component } from '@angular/core';

@Component({
  selector: 'app-data-science',
  templateUrl: './data-science.component.html',
  styleUrls: ['./data-science.component.css'],
})
export class DataScienceComponent {
  benefit: any = [
    'Data is an asset to the business',
    'Improvement of internal operation and efficiency',
    'Understand business processes',
    'Collect helpful market and customer data',
    'Effective financial trading',
  ];
  services: any = [
    {
      main: 'Consulting',
      text: 'Scope identification, feasibility evaluation, choice of tools & algorithms',
    },
    {
      main: 'Data Preparation',
      text: 'Improving the data set by missing value replacement, outlier analysis, categorical variable key.',
    },
    {
      main: 'Model Generation',
      text: 'Here, we generated the model, test, and refine it based on validity',
    },
    {
      main: 'Performance Tuning',
      text: 'We improve model and scripts on an ongoing basis, over & above model self-learning',
    },
    {
      main: 'Migration',
      text: 'Here we do a migration of algorithms, models from one platform to the other.',
    },
    {
      main: 'Route Optimization',
      text: 'Our route optimization services offer usage of cloud-connected software to assist you to automate delivery routes and manage your resource capacity and efficiently.',
    },
    {
      main: 'Big Data Lakes Solutions and Consulting',
      text: 'Our Big Data lake solutions help businesses to know what to do and how to manage the humongous amounts of data that piles up in the organization.',
    },
    {
      main: 'ACD - Document Indexing',
      text: 'We offer industry-agnostic document indexing solutions that can be leveraged by any business planning to automate their documents with content-based classification and get insights from it.',
    },
  ];
}
