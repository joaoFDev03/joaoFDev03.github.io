import { Component, OnInit } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import emailjs from 'emailjs-com';
@Component({
  selector: 'app-contacts',
  imports: [    
    MatInputModule,
    MatButtonModule,
    MatIconModule,
  ReactiveFormsModule],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  contactForm!: FormGroup;
  isSending = false;
  messageSent = false;
  errorMessage = '';
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.invalid) return;

    this.isSending = true;
    this.messageSent = false;
    this.errorMessage = '';
  
    const serviceID = 'service_jpq1gyn';
    const templateID = 'template_p6y9py8';
    const userID = 'K30zpj1viLxyASdw6';
  

    const { name, email, message } = this.contactForm.value;
  
    const templateParams = {
      from_name: name,
      reply_to: email,
      message: message,
    };
  
    emailjs.send(serviceID, templateID, templateParams, userID)
      .then(() => {
        this.isSending = false;
        this.messageSent = true;
        this.contactForm.reset();
      })
      .catch((error) => {
        this.isSending = false;
        this.errorMessage = 'Erro ao enviar mensagem. Tenta novamente mais tarde.';
        console.error('EmailJS error:', error);
      });
    }
}
