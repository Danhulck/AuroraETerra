export interface Product {
  image: string;
  title: string;
  price: string;
  badge?: string;
  description: string;
}

export const products: Product[] = [
  {
    image: "https://images.unsplash.com/photo-1554967651-3997ad1c43b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Vestido Linho Natural",
    price: "R$ 289,90",
    badge: "Novo",
    description: "100% linho orgânico. Tingimento natural com plantas."
  },
  {
    image: "https://images.unsplash.com/photo-1749813991859-8953e5b4dd26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Blusa Algodão Orgânico",
    price: "R$ 159,90",
    description: "Algodão orgânico certificado. Produção ética e sustentável."
  },
  {
    image: "https://images.unsplash.com/photo-1644954497793-9b0280236ca1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Conjunto Minimalista",
    price: "R$ 349,90",
    badge: "Destaque",
    description: "Peças versáteis para um guarda-roupa consciente."
  },
  {
    image: "https://images.unsplash.com/photo-1759572095384-1a7e646d0d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Camiseta Fibras Naturais",
    price: "R$ 129,90",
    description: "Conforto e estilo com fibras 100% naturais."
  },
  {
    image: "https://images.unsplash.com/photo-1758264629814-44559c99e506?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Calça Tecido Reciclado",
    price: "R$ 259,90",
    description: "Tecido reciclado de alta qualidade e durabilidade."
  },
  {
    image: "https://images.unsplash.com/photo-1637790156083-da76c003db2b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    title: "Jaqueta Eco-Friendly",
    price: "R$ 399,90",
    badge: "Bestseller",
    description: "Proteção e estilo com materiais sustentáveis."
  }
];
