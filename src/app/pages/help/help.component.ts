import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

interface HelpArticle {
  title: string;
  category: string;
  summary: string;
  readTime: string;
}

@Component({
  selector: 'app-help',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './help.component.html',
  styleUrl: './help.component.scss'
})
export class HelpComponent {
  searchQuery = signal('');
  activeCategory = signal('all');

  quickGuides: HelpArticle[] = [
    {
      title: 'First-Time Stall Checklist: What You Need on Day 1',
      category: 'stall',
      summary: 'From tablecloth weights and cash float to QR code signs and hygiene tongs—everything you cannot afford to forget.',
      readTime: '4 min read'
    },
    {
      title: 'How to Price Your Product for Real Profit',
      category: 'strategy',
      summary: 'Stop guessing your selling price. Use our simple formula: (Raw ingredients + packaging + event fee factor) × markup.',
      readTime: '3 min read'
    },
    {
      title: 'Using Free AI to Write Your Social Media Content',
      category: 'tech',
      summary: 'Prompt templates to generate 30 days of Instagram reels and captions in under 15 minutes.',
      readTime: '5 min read'
    },
    {
      title: 'Local Permits & Event Safety Requirements',
      category: 'safety',
      summary: 'How to check food handling permits, temporary vendor permissions, and fire safety protocols before your doors open.',
      readTime: '4 min read'
    }
  ];

  faqs = [
    {
      q: 'How does WE CARE differ from regular business consultants?',
      a: 'We focus on practical implementation, not 100-page theoretical slide decks. If you need a stall banner, we design the banner. If you need AI to write posts, we set up the prompts. If you need a spreadsheet for sales, we build it and walk you through it.',
      open: true
    },
    {
      q: 'Do I already need a registered company or formal business license?',
      a: 'No. Many of our clients are testing their very first concept, such as a weekend event pop-up or student startup project. We help you test demand first so you do not waste money on registration before validating sales.',
      open: false
    },
    {
      q: 'Can WE CARE help with physical products (food, crafts, drinks)?',
      a: 'Absolutely. Slide 05 and 06 highlight our practical stall support: helping you select products, design booths, prepare banners, calculate pricing, and streamline order taking.',
      open: false
    },
    {
      q: 'How long does it take from initial contact to having a plan?',
      a: 'Typically within 24 to 48 hours of our first discovery session, we hand over your customized Startup Action Blueprint with clear deliverables and agreed timelines.',
      open: false
    },
    {
      q: 'How are fees determined?',
      a: 'Transparently and upfront. Based on Slide 08, we offer one-time fees (single deliverable), monthly support plans (regular ongoing marketing & guidance), or full startup/stall launch packages. You agree to the scope and cost before any work begins.',
      open: false
    }
  ];

  filteredFaqs() {
    const term = this.searchQuery().toLowerCase().trim();
    return this.faqs.filter(f => !term || f.q.toLowerCase().includes(term) || f.a.toLowerCase().includes(term));
  }

  toggleFaq(item: any) {
    item.open = !item.open;
  }
}
