import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  coreValues = [
    {
      title: 'Action-First Support',
      desc: 'We do not drown you in theoretical textbooks or 50-page plans. We focus on what can be launched, tested, and improved this week.',
      icon: 'zap'
    },
    {
      title: 'Accessible Business Guidance',
      desc: 'High-level business consulting shouldn’t only belong to big corporations. Small stalls, school creators, and local dreamers deserve world-class backing.',
      icon: 'heart'
    },
    {
      title: 'AI & Tech for Everyone',
      desc: 'We democratize cutting-edge AI and digital tools so single-person teams can operate with the speed of an entire marketing department.',
      icon: 'cpu'
    },
    {
      title: 'Transparent Collaboration',
      desc: 'Scope and costs are agreed before work begins. No surprises, no hidden fees, just honest partnership from idea to launch.',
      icon: 'shield'
    }
  ];

  milestones = [
    {
      step: '01',
      title: 'The Challenge Identified',
      text: 'Observing fellow students and local entrepreneurs struggling not because their ideas were weak, but because they lacked tech, branding, and marketing direction.'
    },
    {
      step: '02',
      title: 'School Startup Project Formed',
      text: 'A dedicated team rallied to create a multi-service partner: bringing AI, design, pricing models, and event logistics together under one umbrella.'
    },
    {
      step: '03',
      title: 'The WE CARE Method Tested',
      text: 'Validated through real-world pop-up booths—such as local fresh fruit drinks stalls—proving that simple, guided steps lead to real customer sales.'
    },
    {
      step: '04',
      title: 'Expanding the Horizon',
      text: 'Expanding practical mentorship to crafts, clothing, food, digital services, and early-stage tech ventures.'
    }
  ];
}
