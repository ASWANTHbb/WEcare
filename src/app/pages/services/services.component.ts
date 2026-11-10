import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  selectedCategory = signal<'all' | 'digital' | 'strategy' | 'stall'>('all');

  services = [
    {
      category: 'digital',
      index: '01',
      title: 'AI & technology',
      summary: 'Find useful AI tools, digital systems and ways to save time.',
      tools: ['ChatGPT & Claude Prompts', 'Canva AI', 'Make / Zapier Automation', 'Square / Stripe POS'],
      deliverables: [
        'Custom AI prompt vault for generating sales copy & social posts in seconds',
        'Customer enquiry auto-responders for WhatsApp Business and Instagram',
        'Cloud-based inventory and billing app recommendations tailored to budget',
        'Digital setup walkthrough to ensure you feel confident operating the tools'
      ]
    },
    {
      category: 'strategy',
      index: '02',
      title: 'Business strategy',
      summary: 'Set goals, understand customers and plan the next steps.',
      tools: ['Target Customer Persona Maps', 'Margin Calculator', '90-Day Milestone Tracker'],
      deliverables: [
        'Target customer profile definition and competitor positioning analysis',
        'Cost-per-unit, selling price, and gross margin optimization breakdown',
        'Practical step-by-step 90-day launch and growth roadmap',
        'Risk assessment and pivot plan for unexpected demand changes'
      ]
    },
    {
      category: 'digital',
      index: '03',
      title: 'Marketing',
      summary: 'Plan promotions, social media content and campaigns.',
      tools: ['Instagram & TikTok Reels Guides', 'Event Flyers', 'WhatsApp Broadcasts'],
      deliverables: [
        'Launch countdown campaign schedule with pre-written captions',
        'High-converting promotional discount schemes & loyalty cards',
        'Print-ready flyers and posters for local distribution',
        'Collaborative cross-promotion strategy with neighboring stalls/creators'
      ]
    },
    {
      category: 'digital',
      index: '04',
      title: 'Branding & design',
      summary: 'Create a business name, logo, product designs and banners.',
      tools: ['Vector Logo Design', 'Brand Color Palette', 'Stall Banners', 'Packaging Labels'],
      deliverables: [
        'Memorable brand name options with domain & handle availability check',
        'Professional vector logo in dark, light, and transparent variations',
        'Eye-catching vinyl booth banners and tabletop display signs',
        'Custom price lists, product stickers, and menu boards'
      ]
    },
    {
      category: 'digital',
      index: '05',
      title: 'Online presence',
      summary: 'Set up or improve digital profiles, catalogs and websites.',
      tools: ['Google Business', 'Instagram Catalog', 'Micro-Site & Linktree'],
      deliverables: [
        'Verified Google Business profile with address, hours, and photos',
        'Mobile-friendly online product catalog for seamless browsing',
        'Bio link hub connecting Instagram, WhatsApp, and location maps',
        'Quick-order WhatsApp catalog with automated order confirmations'
      ]
    },
    {
      category: 'strategy',
      index: '06',
      title: 'Business management',
      summary: 'Organize orders, customer enquiries and simple records.',
      tools: ['Google Sheets Ledger', 'Order Forms', 'Customer Review Links'],
      deliverables: [
        'Plug-and-play daily sales and expense spreadsheet',
        'Standard customer enquiry intake template and order pipeline',
        'Inventory re-ordering alert sheets to avoid stockouts',
        'Post-purchase feedback collection link to gather 5-star reviews'
      ]
    }
  ];

  filteredServices() {
    const cat = this.selectedCategory();
    if (cat === 'all') return this.services;
    return this.services.filter(s => s.category === cat || (cat === 'stall' && (s.index === '02' || s.index === '04' || s.index === '06')));
  }

  setCategory(cat: 'all' | 'digital' | 'strategy' | 'stall') {
    this.selectedCategory.set(cat);
  }
}
