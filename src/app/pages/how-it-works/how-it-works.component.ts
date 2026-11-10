import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './how-it-works.component.html',
  styleUrl: './how-it-works.component.scss'
})
export class HowItWorksComponent {
  steps = [
    {
      num: '01',
      title: 'Contact',
      lead: 'The owner contacts WE CARE.',
      details: 'You submit our quick inquiry form with your first name, last name, email, business concept, and current description. No complicated paperwork required.',
      deliverable: 'Prompt response within 24 hours & consultation scheduled.'
    },
    {
      num: '02',
      title: 'Share details',
      lead: 'They explain their business and products.',
      details: 'In a dedicated discovery session, you tell us your product vision, expected customers, target event or venue, and estimated seed budget.',
      deliverable: 'Comprehensive requirements profile & vision document.'
    },
    {
      num: '03',
      title: 'Understand',
      lead: 'We identify needs, strengths and challenges.',
      details: 'Our support team analyzes the feasibility: checking equipment needs, local permit requirements, market demand, and realistic pricing.',
      deliverable: 'Needs, Strengths & Challenges Diagnostic.'
    },
    {
      num: '04',
      title: 'Plan',
      lead: 'We prepare suitable ideas and priorities.',
      details: 'We build your launch blueprint: creating brand assets, banner design, price list, promotion schedule, and basic sales tracking sheets.',
      deliverable: 'Ready-to-execute Launch Blueprint & Brand Package.'
    },
    {
      num: '05',
      title: 'Support',
      lead: 'We help carry out the agreed work and review progress.',
      details: 'We guide you through the stall setup or digital launch, help track initial sales, collect customer feedback, and iterate for continuous growth.',
      deliverable: 'Hands-on execution review & post-launch performance report.'
    }
  ];

  caseStudyPhases = [
    {
      phase: '01 • THE ENTREPRENEUR BRINGS',
      headline: 'A Fruit Drink Idea & $60 Budget',
      points: [
        'Recipe for fresh mango, strawberry, and lime drinks',
        'Opportunity: School community sports carnival with 400+ attendees',
        'Key fear: How to price cups so they make profit without scaring buyers'
      ]
    },
    {
      phase: '02 • WE CARE PREPARES',
      headline: 'Branding, Menu Board & Sales Tally',
      points: [
        'Brand Name: "Juice Haven" with vibrant fruit vector logo',
        'Vinyl tabletop banner and waterproof printed price cards',
        'Cost calculation: $1.15 ingredient cost per cup, selling price at $3.50',
        'WhatsApp Business QR code on booth counter for quick digital orders'
      ]
    },
    {
      phase: '03 • THE STALL OPENS',
      headline: 'Smooth Launch & Repeat Customers',
      points: [
        'Owner served 138 satisfied customers in 4 hours',
        'Earned $483 total revenue ($324 net profit after fruit costs)',
        'Recorded zero stock wastage due to accurate pre-order planning',
        'Collected 42 phone numbers for future local weekend orders'
      ]
    }
  ];

  adaptabilitySectors = [
    { name: 'Fresh Food & Drinks', desc: 'Smoothies, baked goods, snacks, tea pop-ups, dessert stalls', icon: 'coffee' },
    { name: 'Apparel & Accessories', desc: 'Handmade jewelry, t-shirts, tote bags, thrift clothing pop-ups', icon: 'tag' },
    { name: 'Art & Handcrafted Crafts', desc: 'Ceramics, scented candles, custom greeting cards, woodcraft', icon: 'palette' },
    { name: 'Local Services & Tech', desc: 'Tutoring, car detailing, social media management, student AI apps', icon: 'zap' }
  ];
}
