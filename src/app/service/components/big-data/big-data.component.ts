import { Component } from '@angular/core';

@Component({
  selector: 'app-big-data',
  templateUrl: './big-data.component.html',
  styleUrls: ['./big-data.component.css'],
})
export class BigDataComponent {
  expertise: any = [
    {
      main: 'Upgrade Service',
      text: 'The circumstances created with big data offer availability to acquire, store and process a large volume of data. Therefore, they hone the company ability to analyze, discover, predict, and plan.',
    },
    {
      main: 'Feedback in Real Time',
      text: 'The fact of having the data in real time allows a quick reaction. For example, knowing the status of a launch or the result of a strategy instantly. Additionally, latency can be reduced in critical organizational processes.',
    },
    {
      main: 'Machine Learning',
      text: 'Data is one of the causes of this process. Instead of being programmed, machines can learn thanks to the availability of big data to generate machine learning models.',
    },
    {
      main: 'Cost Reduction',
      text: 'Big data implementation helps businesses with prevent loss which in turn help companies to save money. Predictive analysis is becoming more popular in different organizations.',
    },
    {
      main: 'Market Knowledge',
      text: 'Through multiple channels you get a 360 ° view of current and potential customers. This allows you to locate windows of opportunity, which implies anticipating consumer needs, detecting consumer trends or mismatches in customer service. In short, this amounts to having a competitive advantage.',
    },
    {
      main: 'Decision Making Efficiency',
      text: 'For starters, predictive analytics enables the organization to be more efficient and work proactively. In general, having and understanding more information allows you to make better and faster business decisions.',
    },

    {
      main: 'Present And Future Technology',
      text: 'The data big offers a great opportunity for constant innovation. In addition, it is evolving and it is most possible that in the not too distant future it will be essential for companies. This is why more and more companies are betting on digital transformation.',
    },
  ];

  service: any = [
    'Retail and Wholesale trade',
    'Education',
    'Insurance',
    'Healthcare Providers',
    'Government',
    'Communications, Media and Entertainment',
    'Manufacturing and Natural Resources',
    'Banking and Securities',
  ];

  tools = [
    'R',
    'Apache SAMOA',
    'MongoDB',
    'Apache Hadoop',
    'Tableau',
    'Storm',
    'Dataddo',
    'Qubole',
    'HPCC',
    'Knime',
    'Adverity',
    'Rapidminer',
    'Lumify',
    'Cassandra',
    'Xplenty',
    'Talend',
  ];
}
