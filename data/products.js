export const products = [
  {
    id: "1",
    name: "Sharo Health Bread",
    slug: "health-bread",
    description: "Premium brown health bread made with high-quality ingredients",
    benefits: [
      "Beats constipation 100%",
      "No more bloated feelings",
      "High in fibre",
      "Healthy seeds for protein and antioxidants"
    ],
    image: "/sharo-bread.jpg",
    category: "bread",
    price: 45.00
  },
  {
    id: "2",
    name: "Health Sandwiches",
    slug: "health-sandwiches",
    description: "Fresh sandwiches on Sharo health bread with quality fillings",
    benefits: [
      "Convenient meal option",
      "Fresh daily",
      "Variety of fillings"
    ],
    image: "/sharo-sandwich.jpg",
    category: "sandwiches",
    price: 35.00
  },
  {
    id: "3",
    name: "Cinnamon Buns",
    slug: "cinnamon-buns",
    description: "Delicious cinnamon buns baked fresh daily",
    benefits: [
      "Sweet treat",
      "Fresh daily",
      "Quality ingredients"
    ],
    image: "/images/products/cinnamon-buns-enhanced.jpg",
    category: "buns",
    price: 25.00
  }
];

export const getProductBySlug = (slug) => {
  return products.find(p => p.slug === slug);
};

export const getRelatedProducts = (slug) => {
  return products.filter(p => p.slug !== slug).slice(0, 3);
};
