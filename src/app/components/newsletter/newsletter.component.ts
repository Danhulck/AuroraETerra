import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // para ngModel

@Component({
  selector: 'app-newsletter',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './newsletter.component.html',
  styleUrls: ['./newsletter.component.css']
})
export class NewsletterComponent {
  email: string = '';

  handleSubmit(event: Event) {
    event.preventDefault();
    console.log('Newsletter signup:', this.email);
    alert('Obrigado por se inscrever! 🌿');
    this.email = '';
  }
}
