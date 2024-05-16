import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css'],
})
export class OurServiceComponent {
  serviceData: any = [
    {
      path: '/service/data-science',
      mainText: 'Data Science',
      text: 'Data Science is a structured and unstructured model to extract insight from data in different forms and add value to the business.',
    },
    {
      path: '/service/data-warehouse',
      mainText: 'Data Warehousing',
      text: 'Data Warehouse system is a powerful, scalable, and affordable-enabling organisation to share petabytes of data across thousands of users.',
    },
    {
      path: '/service/data-analytics',
      mainText: 'Data Analytics',
      text: 'Data Analytics is the process of analysing data sets in order to draw conclusions about the information using specific systems & software.',
    },
    {
      path: '/service/data-visualisation',
      mainText: 'Data Visualisation',
      text: 'Data Visualisations play the best role in addressing this challenge and help with interacting science outputs with a wide variety of audiences.',
    },
    {
      path: '/service/iot-analytics',
      mainText: 'IoT Analytics',
      text: 'IoT Analytics is an application of data analysis tools that adds value to the data by connecting with the Internet of Things.',
    },
    {
      path: '/service/customer-service',
      mainText: 'Customer 360',
      text: 'Customer 360 provides data with a 360-degree view and enables you to interact with and support every detail about the customer.',
    },
    {
      path: '/service/predictive-analytics',
      mainText: 'Predictive Analytics',
      text: 'Advance Analytics is a tool that helps you extract more data and forecast trends, behaviors, events, and more to perform better.',
    },
    {
      path: '/service/data-migration',
      mainText: 'Data Migration',
      text: 'Data Migration is the process of transferring data from one storage system to another to save necessary and relevant data.',
    },
    {
      path: '/service/devops-service',
      mainText: 'DevOps',
      text: 'DevOps is a set of practices that merge IT operations and software development to deliver high-quality software and improve the software life cycle.',
    },
    {
      path: '/service/microsoft-bi',
      mainText: 'Microsoft Power BI',
      text: 'Microsoft Power BI is a business analytics service that provides interactive visualisations and business intelligence to create dashboards and reports.',
    },
    {
      path: '/service/qlink-sense',
      mainText: 'QlikSense & QlikView',
      text: 'QlikSense and QlikView are analytics solutions and platforms to integrate data, analysis, and data-driven intelligence to deliver business growth.',
    },
    {
      path: '/service/big-data',
      mainText: 'Big Data Integration',
      text: 'Big Data Integration helps you make decisions on the basis of insightful data and forecast the future of business.',
    },
  ];
}
