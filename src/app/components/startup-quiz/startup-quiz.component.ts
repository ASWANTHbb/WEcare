import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

interface QuizOption {
  text: string;
  sub: string;
  icon: string;
}

interface QuizQuestion {
  title: string;
  subtitle: string;
  options: QuizOption[];
}

@Component({
  selector: 'app-startup-quiz',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './startup-quiz.component.html',
  styleUrl: './startup-quiz.component.scss'
})
export class StartupQuizComponent {
  currentStep = signal(0);
  selectedAnswers = signal<number[]>([]);
  showResult = signal(false);

  questions: QuizQuestion[] = [
    {
      title: 'What type of business are you launching or growing?',
      subtitle: 'Select the setup that closest resembles your vision',
      options: [
        { text: 'Local Pop-up / Event Stall', sub: 'Food, fresh drinks, clothing, crafts', icon: 'store' },
        { text: 'Digital Service or Freelance', sub: 'Consulting, coaching, creative work', icon: 'laptop' },
        { text: 'Home-based Products', sub: 'Baking, handmade crafts, boutique items', icon: 'box' },
        { text: 'Early Stage Tech / AI Startup', sub: 'App, software platform, digital portal', icon: 'cpu' }
      ]
    },
    {
      title: 'What is your biggest current bottleneck?',
      subtitle: 'Where do you feel you need the most immediate guidance?',
      options: [
        { text: 'Branding & Presentation', sub: 'Name, logo, banners, product menu', icon: 'palette' },
        { text: 'Attracting Customers', sub: 'Social media promotion, marketing campaign', icon: 'users' },
        { text: 'AI & Automation', sub: 'Using AI tools to save time & automate tasks', icon: 'zap' },
        { text: 'Pricing & Business Strategy', sub: 'Estimating costs, profit margin & planning', icon: 'trending-up' }
      ]
    },
    {
      title: 'What is your preferred support timeframe?',
      subtitle: 'Choose how you would like to collaborate with WE CARE',
      options: [
        { text: 'Quick Launch Package', sub: 'Complete setup for an upcoming stall or event', icon: 'rocket' },
        { text: 'One-Time Deliverable', sub: 'A polished logo, business plan, or website', icon: 'check-circle' },
        { text: 'Ongoing Monthly Mentorship', sub: 'Continuous marketing, review & guidance', icon: 'calendar' },
        { text: 'Exploratory Advice', sub: 'Just need someone to validate my business idea', icon: 'help-circle' }
      ]
    }
  ];

  selectOption(index: number) {
    const current = [...this.selectedAnswers()];
    current[this.currentStep()] = index;
    this.selectedAnswers.set(current);

    if (this.currentStep() < this.questions.length - 1) {
      setTimeout(() => {
        this.currentStep.update(s => s + 1);
      }, 250);
    } else {
      setTimeout(() => {
        this.showResult.set(true);
      }, 300);
    }
  }

  prevStep() {
    if (this.currentStep() > 0) {
      this.currentStep.update(s => s - 1);
    }
  }

  resetQuiz() {
    this.currentStep.set(0);
    this.selectedAnswers.set([]);
    this.showResult.set(false);
  }

  getRecommendation() {
    const answers = this.selectedAnswers();
    if (answers[0] === 0 || answers[2] === 0) {
      return {
        title: 'Practical Pop-Up & Stall Launch Package',
        desc: 'Based on your selections, we recommend starting with our 6-step practical stall roadmap. We will help you design your banner, price list, WhatsApp business ordering, and initial budget.',
        pillar: 'Practical Startup Support (Slide 05 & 06)',
        badge: 'Top Match for You'
      };
    } else if (answers[1] === 2) {
      return {
        title: 'AI & Technology Acceleration Track',
        desc: 'We will identify the right AI tools to automate your workflows, streamline customer communications, and generate high-impact marketing content in minutes.',
        pillar: 'AI & Technology Pillar (Slide 04)',
        badge: 'Recommended'
      };
    } else {
      return {
        title: 'Comprehensive Startup Strategy & Branding Suite',
        desc: 'We will work with you one-on-one to craft your brand identity, define clear pricing and customer targets, and establish your digital presence.',
        pillar: 'Business Strategy & Marketing (Slide 03 & 04)',
        badge: 'Recommended'
      };
    }
  }
}
