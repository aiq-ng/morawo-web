import { Component } from '@angular/core';

@Component({
  selector: 'app-devops-service',
  templateUrl: './devops-service.component.html',
  styleUrls: ['./devops-service.component.css'],
})
export class DevopsServiceComponent {
  benefits = [
    'Increase Customer Satisfaction & Retention',
    'Better Release Control & Versioning',
    'Increase Business Efficiency',
    'More Frequent Software Releases',
    'Improve Response Time',
    'Better Development Velocity',
    'Increase Ops Alignment to Business Goals',
    'Reduce Time For Action',
    'Reduced Cost Over Time',
    'Better Collaboration Amongst Project Teams',
    'Improve Business Agility',
    'Reduced Costs',
    'Faster Delivery of New Features',
    'Automated Server Configuration Decreases Time Window For Resource Management',
  ];

  expertise: any = [
    {
      main: 'Infrastructure Management',
      text: 'Our IT infrastructure management services assist enterprises to stimulate their IT operations to achieve the summit of success in their IT operations. Morawp DevOps services use the cloud in improving reliability and scalability.',
    },
    {
      main: 'DevOps Consulting Services',
      text: 'Leverage DevOps consulting services to expedite speed-to-market. Our domain expertise includes server orchestration, server support, virtualization, and server security.',
    },
    {
      main: 'DevOps Configuration Management',
      text: 'Avail an extensive arrangement of tools for more active issue determination and increased agility to leverage the supreme quality of services. We have the expertise to manage your every lean operation.',
    },
    {
      main: 'DevOps Automation Service',
      text: 'To automate the deployment process makes companies more profitable and agile while reducing overall production time and the connected risk.',
    },
    {
      main: 'Virtualization',
      text: 'Through virtualization, our IT teams can use the same computer and network environments to breake down boundaries in a DevOps organization and decreasing costs substantially.',
    },
    {
      main: 'Staff Augmentation',
      text: 'One of the most important problems when building out a DevOps team is to find experienced talent. Our DevOps developers are among the best in the world, ready to join your team and contribute immediately.',
    },

    {
      main: 'Continuous Integration & Deployment',
      text: 'Our DevOps team gives services & solutions with constant integration and continuous delivery services to securely build, test and release quality code using a variety of tools.',
    },
  ];

  service: any = [
    'Long Years Of Experience',
    '24*7 Support',
    'Robust Solutions',
    'Accomplishing Business Goals',
    'Fast & Efficient Delivery',
  ];

  tools = ['Ansible', 'Amazon Web Services', 'Chef', 'Splunk'];
}
