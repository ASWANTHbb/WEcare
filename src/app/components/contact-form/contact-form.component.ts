import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  isSubmitting = signal(false);
  isSuccess = signal(false);
  submissionData = signal<any>(null);
  referenceId = signal('');

  serviceOptions = [
    'AI & Technology Tools',
    'Business Strategy & Planning',
    'Marketing & Promotion Campaigns',
    'Branding, Logo & Visual Design',
    'Online Presence & Catalogs',
    'Practical Pop-up / Stall Setup',
    'Full Startup Guidance Package'
  ];

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(1)]],
      email: ['', [Validators.required, Validators.email]],
      businessName: ['', [Validators.required, Validators.minLength(2)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      serviceInterest: ['Full Startup Guidance Package']
    });
  }

  onSubmit() {
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSubmitting.set(true);

    // Simulate backend processing
    setTimeout(() => {
      const generatedRef = 'WC-' + Math.floor(100000 + Math.random() * 900000);
      this.referenceId.set(generatedRef);
      this.submissionData.set(this.contactForm.value);
      this.isSubmitting.set(false);
      this.isSuccess.set(true);
    }, 1200);
  }

  resetForm() {
    this.contactForm.reset({
      serviceInterest: 'Full Startup Guidance Package'
    });
    this.isSuccess.set(false);
    this.submissionData.set(null);
  }
}
