import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-industries',
  templateUrl: './industries.component.html', 
  styleUrls: ['./industries.component.css']
})
export class IndustriesComponent {
  constructor(private router: Router)  {}
  idustriesData: any = [
    {
      mainText: "Manufacturing",
      text: "Transform your business by boosting productivity, refine adaptability with data",
      image: "/assets/images/industry/manufacture.webp",
      path: "/industry/manufacturing"
    },
    {
      mainText: "Banking And Financials",
      text: "Power your Data Analytics and prevent fraudulent activity and ensure data security while integrated with third-party",
      image: "/assets/images/industry/finance.webp",
      path: "/industry/banking-finance"
    }, 
    {
      mainText: "Insurance",
      text: "Align insurance with faster decision-making, enhance legacy system, empower customer relations, and integrated third-party services",
      image: "/assets/images/industry/insurance.webp",
      path: "/industry/insurance"
    },
    {
      mainText: "Healthcare",
      text: "Enhance medical facilities, seamless practice process, track and get the insight of the data, reduce expense, and reform quality of care.",
      image: "/assets/images/industry/healthcare.webp",
      path: "/industry/healthcare"
    },
    {
      mainText: "Retail",
      text: "With research data, create a market growth strategy, optimize product sales and inventory, and predict the future demand.",
      image: "/assets/images/industry/retail.webp",
      path: "/industry/retail"
    },
    {
      mainText: "Media And Entertainment",
      text: "Deliver high-quality content with seamless integrated services and accomplish analytics success",
      image: "/assets/images/industry/media.webp",
      path: "/industry/media"
    },
    {
      mainText: "Education",
      text: "Give a new platform and approach to learning, personalized learning experience with remarkable technology",
      image: "/assets/images/industry/education.webp",
      path: "/industry/education"
    },
    {
      mainText: "Automotive",
      text: "We provide a research database which helps in Mapping metadata, ensuring high quality of data analytics and reports.",
      image: "/assets/images/industry/automative.webp",
      path: "/industry/automotive"
    },
    {
      mainText: "Travel and Hospitality",
      text: "Boost your sales service, enhance customer segmentation with analysis and predict future price strategies",
      image: "/assets/images/industry/travel.webp",
      path: "/industry/travel"
    },
    {
      mainText: "Oil And Gas",
      text: "Improve your automate workflows and monitoring process, high analytical and report facilities while ensuring data safety",
      image: "/assets/images/industry/oil.webp",
      path: "/industry/oil-gas"
    },
    {
      mainText: "Real Estate And E-commerce",
      text: "Power your Data Analytics and prevent fraudulent activity and ensure data security while integrated with third-party",
      image: "/assets/images/industry/real-estate.webp",
      path: "/industry/real-estate"
    },
    {
      mainText: "Telecom",
      text: "Provide new innovative workflows, enhance data-driven network services, help to obtain new customers, and expand market reach strategically.",
      image: "/assets/images/industry/telecom.webp",
      path: "/industry/telecom"
    },
    {
      mainText: "Food And Beverages",
      text: "Keep the track on quality, enhance services, bring out more innovation, and boost the product sales.",
      image: "/assets/images/industry/food.webp",
      path: "/industry/food-beverages"
    },
    {
      mainText: "Energy",
      text: "Discover new energy, cost-effective and prevent power outage, increase the production and sales with data",
      image: "/assets/images/industry/energy.webp",
      path: "/industry/energy"
    },
   ]
   blogPosts: any = [
    {
      image: '/assets/images/blogOne.webp',
      text: 'The Future of Agriculture: Embracing Digital Transformation',
    },
    {
      image: '/assets/images/blogTwo.webp',
      text: 'Optimizing Crop Yields with Data-Driven Decisions',
    },
    {
      image: '/assets/images/blogThree.webp',
      text: 'Maximizing Crop Yields in Africa: A Guide to Local Success',
    },
    {
      image: '/assets/images/blogOne.webp',
      text: 'The Future of Agriculture: Embracing Digital Transformation',
    },
    {
      image: '/assets/images/blogTwo.webp',
      text: 'Optimizing Crop Yields with Data-Driven Decisions',
    },
    {
      image: '/assets/images/blogThree.webp',
      text: 'Maximizing Crop Yields in Africa: A Guide to Local Success',
    },
  ];

    infoHandler(id: number) {
    this.router.navigate(['/industries', id]);
  }
}
