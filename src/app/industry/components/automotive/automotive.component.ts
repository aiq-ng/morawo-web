import { Component } from '@angular/core';

@Component({
  selector: 'app-automotive',
  templateUrl: './automotive.component.html',
  styleUrls: ['./automotive.component.css'],
})
export class AutomotiveComponent {
  benefits: any = [
    {
      mainText: 'Improve product manufacturing',
      text: `Data analytics and big data has been used for years in assembly plants to establish quality standards, where it is possible to predict the duration of the different parts of the vehicle. It makes it is possible to detect where the motor or electrical system is failing, which helps to introduce the necessary changes in the assembly line to be able to make the necessary corrections.`,
    },
    {
      mainText: 'It helps improve loyalty',
      text: `The big automotive data collected large amounts of information, mainly related to users. But its greatest advantage is that it is possible to cross all this data with other external ones, such as geographic or social, even through Artificial Intelligence. 
      Thanks to data processing, companies can reach the most interesting conclusions. On the one hand, the internal processing allows obtaining information about the company itself. On the other hand, external processing allows access to data about the target audience, among others, to be able to define the behavior or motivations of the user of a certain territory.`,
    },
    {
      mainText: 'The design of new models',
      text: `Thanks to data analytics in the automotive sector, both internal and external information is obtained that helps to optimize the production process. On the one hand, the data processing of the company's clients is carried out, and on the other, comments from social networks and the internet can be collected.
      Thus, once both slopes have been crossed, the automobile company is able to adapt its production based on these data-based variables. Despite this, it is necessary to order the information correctly and have a professional with analytical capacity who knows how to interpret the data to turn it into knowledge, such as knowing which finishes would be sold the most, which accessories users demand the most or what type of vehicle would prefer each segment.`,
    },
  ];
}
