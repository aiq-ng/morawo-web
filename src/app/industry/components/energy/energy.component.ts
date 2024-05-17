import { Component } from '@angular/core';

@Component({
  selector: 'app-energy',
  templateUrl: './energy.component.html',
  styleUrls: ['./energy.component.css'],
})
export class EnergyComponent {
  dataType: any = [
    {
      mainText: 'Better consumption and demand forecasts',
      text: `Demand forecasts are of central importance for energy suppliers, as they buy the electricity for end customers in large tranches on the electricity exchange. With the increasing accuracy of the forecasts, supply and demand can be significantly adjusted, thus significantly reducing the risk and unnecessary additional costs for suppliers. Predictive Analytics enables forecasts of electricity demand through stochastic analyzes based on consumption data and external data (e.g. weather data, vacation times, consumer behavior). `,
    },
    {
      mainText: 'Smart solutions for the energy consumer',
      text: `Big data analytics can be used to create new dynamic contract models for additional sales for utilities from the masses of data obtained from smart metering. The mobile communications industry has been using such innovative contracts with great success for many years. In addition, the energy supplier can now design the energy tariffs individually, taking consumer behavior into account.`,
    },
    {
      mainText: 'Advance maintenance of electrical systems',
      text: `Predictive maintenance enables the early detection of faults in electrical systems and components and prevents early system failure. Moving or rotating components in particular (energy-generating systems, generators) are exposed to natural wear and tear, which in the event of an actual failure can lead to malfunctions or dangerous situations. `,
    },
    {
      mainText: 'Commercialization of data',
      text: `The precision of energy consumption through smart metering enables far-reaching insights into the lifestyle or operational conditions of end users. The energy supplier can not only get a comprehensive picture of the energy behavior of a household or company, but also which devices or machines the consumer has "on the grid". These potentials suggest that new billion-dollar markets for the commercial use of data are emerging here.`,
    },
    {
      mainText: 'Other fields of application of big data',
      text: `In addition to the outlined fields of application, the identification and commercial analysis of data anomalies is another field of application. Energy theft and loss and reactive power such as the identification of endangered or overloaded devices and systems in the distribution network can be tracked using special methods and new technologies. `,
    },
  ];
}
