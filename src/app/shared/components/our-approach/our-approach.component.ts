import { Component } from '@angular/core';

@Component({
  selector: 'app-our-approach',
  templateUrl: './our-approach.component.html',
  styleUrls: ['./our-approach.component.css'],
})
export class OurApproachComponent {
  approachIcon: any = [
    {
      id: 1,
      icon: '/assets/icons/home/understand-objective.svg',
      text: 'Understand The Objective',
    },
    {
      id: 2,
      icon: '/assets/icons/home/import-data.svg',
      text: 'Import The Data',
    },
    {
      id: 3,
      icon: '/assets/icons/home/clean-data.svg',
      text: 'Explore And Clean The Data',
    },
    {
      id: 4,
      icon: '/assets/icons/home/model-data.svg',
      text: 'Model The Data',
    },
    {
      id: 5,
      icon: '/assets/icons/home/communicate-result.svg',
      text: 'Communicate The Results',
    },
  ];
}
