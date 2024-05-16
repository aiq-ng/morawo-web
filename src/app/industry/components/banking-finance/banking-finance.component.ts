import { Component } from '@angular/core';

@Component({
  selector: 'app-banking-finance',
  templateUrl: './banking-finance.component.html',
  styleUrls: ['./banking-finance.component.css'],
})
export class BankingFinanceComponent {
  area: any = [
    {
      mainText: 'Legal & Compliance Management',
      text: 'Enlarge human-run tasks by utilizing technology to analyze legal documents, secure compliance, and decide the influence of new regulations on bank contracts and management.',
    },
    {
      mainText: 'Intelligent Robotic Process Automation',
      text: 'Automating front-office activities, loan origination, and client onboarding provides bots with extra data from complicated documents.',
    },
    {
      mainText: 'Risk Management',
      text: 'With intelligent data access and analysis, you can boost anti-money laundering, Know Your Customer (KYC), and third-party risk monitoring efforts.',
    },
    {
      mainText: 'Digital Customer Interaction',
      text: 'Self-service systems, chatbots, and email management can all benefit from natural language understanding (NLU).',
    },
    {
      mainText: 'Corporate Intelligence',
      text: 'Use open-source intelligence to assist strategic decision-making, reduce operational risk, and improve investment management by analyzing large data.',
    },
  ];
  benefits: any = [
    {
      mainText: 'Fiscal Forecasting',
      text: 'The interest earned on loans is how banks generate money. That, however, is assuming that individuals repay the money and do not default.',
    },
    {
      mainText: 'Reducing operational costs',
      text: 'Artificial intelligence (AI) may decrease mistakes associated with human manual operations such as paperwork and data input in banking. Automation bots, AI  assistants, and computer vision helps to make human vision brighter and easier through using discovery approaches and process mining. ',
    },
    {
      mainText: 'Personalized Banking',
      text: 'When it comes to analyzing innovative ways to deliver extra advantages and comfort to particular consumers, Artificial Intelligence may be quite useful. Artificial Intelligence (AI) in the banking business provides clients with smart chatbots that assist them with self-help options.When it comes to analyzing innovative ways to deliver extra advantages and comfort to particular consumers, Artificial Intelligence may be quite useful. Artificial Intelligence (AI) in the banking business provides clients with smart chatbots that assist them with self-help options.',
    },
    {
      mainText: 'Credit Risk',
      text: 'Delivering credit choices requires a thorough review of all relevant data. Credit risk analysis may be more efficient, accurate, and successful with artificial intelligence (AI) solutions.',
    },
  ];
}
