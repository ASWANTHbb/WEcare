import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { StartupQuizComponent } from '../../components/startup-quiz/startup-quiz.component';

interface FaqItem {
  question: string;
  answer: string;
  category: string;
  isOpen: boolean;
}

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule, ContactFormComponent, StartupQuizComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  // Active step for How It Works interactive stepper
  activeStepIndex = signal(0);

  // Active Service Tab for deep dive
  activeServiceIndex = signal(0);

  // Search filter for FAQs
  faqSearchTerm = signal('');
  selectedFaqCategory = signal('all');

  // Interactive Pricing / Scope Calculator
  selectedScopeItems = signal<string[]>([
    'logo-branding',
    'stall-layout',
    'whatsapp-orders'
  ]);

  servicesList = [
    {
      id: 'ai-tech',
      title: 'AI & technology',
      summary: 'Find useful AI tools, digital systems and ways to save time.',
      icon: 'cpu',
      deliverables: [
        'AI prompt templates for automated copywriting & marketing',
        'Customer enquiry automation via WhatsApp & Email',
        'Cloud-based inventory and billing app recommendations',
        'Time-saving digital automation for repetitive tasks'
      ],
      idealFor: 'Startups wanting to operate lean and fast with cutting-edge tools.'
    },
    {
      id: 'strategy',
      title: 'Business strategy',
      summary: 'Set goals, understand customers and plan the next steps.',
      icon: 'target',
      deliverables: [
        'Target customer persona & demand verification',
        'Realistic pricing models with healthy profit margins',
        'Step-by-step milestone timeline for first 90 days',
        'Competitor review and unique value proposition'
      ],
      idealFor: 'Founders with an idea who need clear direction and a viable path.'
    },
    {
      id: 'marketing',
      title: 'Marketing',
      summary: 'Plan promotions, social media content and campaigns.',
      icon: 'megaphone',
      deliverables: [
        'Local event & launch promotion roadmap',
        'Ready-to-post social media calendar & captions',
        'Flyer designs and word-of-mouth campaign strategy',
        'High-converting discount offers & loyalty incentives'
      ],
      idealFor: 'Any new business looking to get its first 50 to 500 customers.'
    },
    {
      id: 'branding',
      title: 'Branding & design',
      summary: 'Create a business name, logo, product designs and banners.',
      icon: 'palette',
      deliverables: [
        'Memorable business name brainstorming & check',
        'High-resolution vector logo in all formats',
        'Print-ready event banners and tabletop display signage',
        'Product labels, packaging stickers and price cards'
      ],
      idealFor: 'Businesses needing a trustworthy, eye-catching visual identity.'
    },
    {
      id: 'online',
      title: 'Online presence',
      summary: 'Set up or improve digital profiles, catalogs and websites.',
      icon: 'globe',
      deliverables: [
        'Google Business Profile setup with verified location',
        'Interactive digital product catalog or micro-website',
        'Instagram & Facebook professional page configuration',
        'Direct WhatsApp order link generator with quick replies'
      ],
      idealFor: 'Founders who want customers to find and order from them online.'
    },
    {
      id: 'management',
      title: 'Business management',
      summary: 'Organize orders, customer enquiries and simple records.',
      icon: 'clipboard',
      deliverables: [
        'Simple spreadsheet sales & expense tracker',
        'Standard customer enquiry intake template',
        'Daily cash flow and ingredient / stock ledger',
        'Customer feedback survey link & review sheet'
      ],
      idealFor: 'Entrepreneurs wanting clean records without complicated software.'
    }
  ];

  howItWorksSteps = [
    {
      step: '01',
      title: 'Contact',
      desc: 'The owner contacts WE CARE.',
      details: 'Reach out via our simple online form, WhatsApp, or school startup hub. You tell us your initial idea and the questions keeping you up at night.',
      deliverable: 'Initial inquiry confirmation & discovery questionnaire.'
    },
    {
      step: '02',
      title: 'Share details',
      desc: 'They explain their business and products.',
      details: 'In a 30-minute structured discussion, we learn about your products, budget, target audience, and current challenges.',
      deliverable: 'Idea assessment brief & requirements log.'
    },
    {
      step: '03',
      title: 'Understand',
      desc: 'We identify needs, strengths and challenges.',
      details: 'Our team evaluates your concept against market demand, feasible tech/AI tools, and resource availability.',
      deliverable: 'Strengths & opportunities diagnostic matrix.'
    },
    {
      step: '04',
      title: 'Plan',
      desc: 'We prepare suitable ideas and priorities.',
      details: 'We build an actionable roadmap with clear deliverables: from branding and stall setup to pricing and marketing.',
      deliverable: 'Complete Startup Action Blueprint.'
    },
    {
      step: '05',
      title: 'Support',
      desc: 'We help carry out the agreed work and review progress.',
      details: 'We do not just hand over a PDF. We stand by you during setup, launch, and first sales, reviewing results to keep improving.',
      deliverable: 'Hands-on execution, review & iterative improvements.'
    }
  ];

  faqs: FaqItem[] = [
    {
      category: 'general',
      question: 'What is WE CARE and who is it for?',
      answer: 'WE CARE is a startup and business growth supporting partner born out of the School Startup Project initiative. We help aspiring entrepreneurs, students, and small business owners turn ideas into practical reality using AI, modern technology, marketing, and business strategy.',
      isOpen: true
    },
    {
      category: 'services',
      question: 'How does WE CARE use AI to help my startup?',
      answer: 'We do not sell confusing AI theory. We identify practical, time-saving tools: using AI to generate high-converting marketing copy, design banners, build product catalogs, automate WhatsApp customer inquiries, and analyze sales trends—freeing you to focus on your product.',
      isOpen: false
    },
    {
      category: 'stall',
      question: 'Can you help me launch a physical pop-up stall or food booth?',
      answer: 'Yes! As detailed in Slide 05 & 06 of our presentation, we specialize in practical pop-up and small stall setups. We help you choose the product, plan the physical stall layout, create banners and menus, calculate costs & selling prices, promote the event, and set up sales tracking.',
      isOpen: false
    },
    {
      category: 'pricing',
      question: 'How do you charge for your services?',
      answer: 'We offer three transparent models (Slide 08): One-time service fees (for a logo, banner, business plan), Monthly support plans (for ongoing marketing and business guidance), or a comprehensive Startup/Stall package. Scope and costs are agreed before any work begins.',
      isOpen: false
    },
    {
      category: 'process',
      question: 'What are the required details to get started?',
      answer: 'All you need is your First Name, Last Name, Email, Business Name or Concept, and a short Description of what you want to achieve. Fill out our contact form and our team will get back to you within 24 hours.',
      isOpen: false
    },
    {
      category: 'stall',
      question: 'Do you help with local permissions and safety requirements?',
      answer: 'Yes. As noted in Slide 06, we guide founders in reviewing local regulations, food hygiene guidelines, permit requirements, and safety protocols before opening to the public.',
      isOpen: false
    }
  ];

  filteredFaqs() {
    const term = this.faqSearchTerm().toLowerCase().trim();
    const cat = this.selectedFaqCategory();

    return this.faqs.filter(item => {
      const matchesCat = cat === 'all' || item.category === cat;
      const matchesTerm = !term || 
        item.question.toLowerCase().includes(term) || 
        item.answer.toLowerCase().includes(term);
      return matchesCat && matchesTerm;
    });
  }

  toggleFaq(item: FaqItem) {
    item.isOpen = !item.isOpen;
  }

  setFaqCategory(category: string) {
    this.selectedFaqCategory.set(category);
  }

  setActiveStep(index: number) {
    this.activeStepIndex.set(index);
  }

  setActiveService(index: number) {
    this.activeServiceIndex.set(index);
  }

  toggleScope(itemId: string) {
    const current = [...this.selectedScopeItems()];
    const index = current.indexOf(itemId);
    if (index > -1) {
      current.splice(index, 1);
    } else {
      current.push(itemId);
    }
    this.selectedScopeItems.set(current);
  }

  isScopeSelected(itemId: string): boolean {
    return this.selectedScopeItems().includes(itemId);
  }
}
