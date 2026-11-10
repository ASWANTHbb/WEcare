import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, RouterModule, ContactFormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  officeDetails = [
    {
      title: 'Project Hub',
      detail: 'School Startup Project & Incubation Center',
      sub: 'Main Innovation Lab, Block 4'
    },
    {
      title: 'Inquiry Support',
      detail: 'support@wecarestartup.org',
      sub: 'Replies guaranteed within 24 hours'
    },
    {
      title: 'Working Hours',
      detail: 'Monday – Friday: 8:30 AM – 5:30 PM',
      sub: 'Weekend pop-up on-site support available'
    }
  ];
}
