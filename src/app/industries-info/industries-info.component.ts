import { Component } from '@angular/core';

@Component({
  selector: 'app-industries-info',
  templateUrl: './industries-info.component.html',
  styleUrls: ['./industries-info.component.css'],
})
export class IndustriesInfoComponent {
  mockData: any = [
    {
      mainText: 'Consulting',
      text: 'Scope identification, feasibility evaluation, choice of tools & algorithms',
    },
    {
      mainText: 'Data Preparation',
      text: 'Improving the data set by missing value replacement, outlier analysis, categorical variable key.',
    },
    {
      mainText: 'Model Generation',
      text: 'Here, we generated the model, test, and refine it based on validity',
    },
    {
      mainText: 'Performance Tuning',
      text: 'We improve model and scripts on an ongoing basis, over & above model self-learning',
    },
    {
      mainText: 'Migration',
      text: 'Here we do a migration of algorithms, models from one platform to the other.',
    },
    {
      mainText: 'Route Optimization',
      text: 'Our route optimization services offer usage of cloud-connected software to assist you to automate delivery routes and manage your resource capacity and efficiently.',
    },
    {
      mainText: 'Big Data Lakes Solutions and Consulting',
      text: 'Our Big Data lake solutions help businesses to know what to do and how to manage the humongous amounts of data that piles up in the organization.',
    },
    {
      mainText: 'ACD - Document Indexing',
      text: 'We offer industry-agnostic document indexing solutions that can be leveraged by any business planning to automate their documents with content-based classification and get insights from it.',
    },
  ];
}
