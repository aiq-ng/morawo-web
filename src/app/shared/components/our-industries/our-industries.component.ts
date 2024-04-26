import { Component } from '@angular/core';

@Component({
  selector: 'app-our-industries',
  templateUrl: './our-industries.component.html',
  styleUrls: ['./our-industries.component.css'],
})
export class OurIndustriesComponent {
  industriesData: any = [
    {
      image: '/assets/images/home/agriculture.png',
      mainText: 'Agriculture',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
    },
    {
      image: '/assets/images/home/insurance.png',
      mainText: 'Insurance',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
    },
    {
      image: '/assets/images/home/manufacturing.png',
      mainText: 'Manufacturing',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
    },
    {
      image: '/assets/images/home/transportation.png',
      mainText: 'Transportation and Logistics',
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`,
    },
    {
      image: "/assets/images/home/startup.png",
      mainText: "Startup MVP",
      text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
      molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum`
    }
  ];
}
