import { Component } from '@angular/core';

@Component({
  selector: 'app-our-service',
  templateUrl: './our-service.component.html',
  styleUrls: ['./our-service.component.css'],
})
export class OurServiceComponent {
  serviceData: any = [
    {
      mainText: 'Data Science',
      text: 'Data Science is a structured and unstructured model to extract insight from data in different forms and add value to the business.',
    },
    {
      mainText: 'Data Warehousing',
      text: 'Data Warehouse system is a powerful, scalable, and affordable-enabling organisation to share petabytes of data across thousands of users.',
    },
    {
      mainText: 'Data Analytics',
      text: 'Data Analytics is the process of analysing data sets in order to draw conclusions about the information using specific systems & software.',
    },
    {
      mainText: 'Data Visualisation',
      text: 'Data Visualisations play the best role in addressing this challenge and help with interacting science outputs with a wide variety of audiences.',
    },
    {
      mainText: 'IoT Analytics',
      text: 'IoT Analytics is an application of data analysis tools that adds value to the data by connecting with the Internet of Things.',
    },
    {
      mainText: 'Customer 360',
      text: 'Customer 360 provides data with a 360-degree view and enables you to interact with and support every detail about the customer.',
    },
    {
      mainText: 'Predictive Analytics',
      text: 'Advance Analytics is a tool that helps you extract more data and forecast trends, behaviors, events, and more to perform better.',
    },
    {
      mainText: 'Data Migration',
      text: 'Data Migration is the process of transferring data from one storage system to another to save necessary and relevant data.',
    },
    {
      mainText: 'DevOps',
      text: 'DevOps is a set of practices that merge IT operations and software development to deliver high-quality software and improve the software life cycle.',
    },
    {
      mainText: 'Microsoft Power BI',
      text: 'Microsoft Power BI is a business analytics service that provides interactive visualisations and business intelligence to create dashboards and reports.',
    },
    {
      mainText: 'QlikSense & QlikView',
      text: 'QlikSense and QlikView are analytics solutions and platforms to integrate data, analysis, and data-driven intelligence to deliver business growth.',
    },
    {
      mainText: 'Big Data Integration',
      text: 'Big Data Integration helps you make decisions on the basis of insightful data and forecast the future of business.',
    },
  ];
  
}
