import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'WE CARE — Your Business Growth & Startup Support Partner'
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'About Us — WE CARE Startup Support'
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services.component').then(m => m.ServicesComponent),
    title: 'Services & Stall Setup — WE CARE'
  },
  {
    path: 'how-it-works',
    loadComponent: () => import('./pages/how-it-works/how-it-works.component').then(m => m.HowItWorksComponent),
    title: 'How It Works (5-Step Process) — WE CARE'
  },
  {
    path: 'help',
    loadComponent: () => import('./pages/help/help.component').then(m => m.HelpComponent),
    title: 'Help Center & FAQs — WE CARE'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact Us — WE CARE Startup Support'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
