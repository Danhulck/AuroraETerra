import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Value {
  icon: string;
  title: string;
  description: string;
}

@Component({
  selector: 'app-brand-values',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './brand-values.component.html',
  styleUrls: ['./brand-values.component.css']
})
export class BrandValuesComponent {
  values: Value[] = [
    {
      icon: '🌿',
      title: '100% Sustentável',
      description: 'Todos os nossos produtos são feitos com materiais orgânicos e ecológicos'
    },
    {
      icon: '❤️',
      title: 'Produção Ética',
      description: 'Valorizamos cada pessoa envolvida em nossa cadeia de produção'
    },
    {
      icon: '♻️',
      title: 'Economia Circular',
      description: 'Incentivamos a reciclagem e reutilização de todas as nossas peças'
    },
    {
      icon: '👥',
      title: 'Comunidade',
      description: 'Construímos uma comunidade de pessoas conscientes e estilosas'
    }
  ];
}
