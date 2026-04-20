export type HighlightLabel =
  | "Best seller"
  | "Edición limitada"
  | "Chef's creation"
  | "Favorito"
  | "Ideal para regalo";

export interface MenuItem {
  name: string;
  description: string;
  price: number;
  category: string;
  highlightLabel?: HighlightLabel;
  featured?: boolean;
  image: string;
}

export interface Category {
  slug: string;
  name: string;
}

export function formatPrice(price: number): string {
  return `S/ ${price}`;
}

export const categories: Category[] = [
  { slug: "tortas-enteras", name: "Tortas enteras" },
  { slug: "porciones-individuales", name: "Porciones individuales" },
  { slug: "postres-de-vitrina", name: "Postres de vitrina" },
  { slug: "box-regalos-dulces", name: "Box / regalos dulces" },
  { slug: "bebidas-calientes", name: "Bebidas calientes" },
  { slug: "bebidas-frias", name: "Bebidas frías" },
  { slug: "especiales-de-temporada", name: "Especiales de temporada" },
];

// Imágenes verificadas de Unsplash
const img = {
  berryVanilla: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&q=75",
  chocolate: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=75",
  cheesecake: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&q=75",
  caramelCake: "https://images.unsplash.com/photo-1621303837174-89787a7d4729?w=500&q=75",
  redVelvet: "https://images.unsplash.com/photo-1616541823729-00fe0aacd32c?w=500&q=75",
  chocoSlice: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=75",
  berrySlice: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=75",
  carrotCake: "https://images.unsplash.com/photo-1621955511667-e2c316e4575d?w=500&q=75",
  pistachio: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500&q=75",
  milhojas: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500&q=75",
  tartFresa: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=500&q=75",
  eclair: "https://images.unsplash.com/photo-1550617931-e17a7b70dce2?w=500&q=75",
  brownie: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=500&q=75",
  cinnamon: "https://images.unsplash.com/photo-1509365390695-33aee754301f?w=500&q=75",
  macarons: "https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=500&q=75",
  cookies: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=500&q=75",
  tiramisu: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=500&q=75",
  giftBox: "https://images.unsplash.com/photo-1548848221-0c2e497ed557?w=500&q=75",
  teaTime: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?w=500&q=75",
  miniDesserts: "https://images.unsplash.com/photo-1587314168485-3236d6710814?w=500&q=75",
  celebration: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=75",
  espresso: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=500&q=75",
  americano: "https://images.unsplash.com/photo-1521302080334-4bebac2763a6?w=500&q=75",
  cappuccino: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=500&q=75",
  latte: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=75",
  mocha: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=500&q=75",
  hotChoco: "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?w=500&q=75",
  tea: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=500&q=75",
  coldBrew: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=500&q=75",
  icedLatte: "https://images.unsplash.com/photo-1517701604599-bb29b565090c?w=500&q=75",
  frappe: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=500&q=75",
  lemonade: "https://images.unsplash.com/photo-1513558161293-cdaf765ed514?w=500&q=75",
  frozen: "https://images.unsplash.com/photo-1546173159-315724a31696?w=500&q=75",
  figTart: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500&q=75",
  croissant: "https://images.unsplash.com/photo-1509461399763-ae67a981b254?w=500&q=75",
  orangeCake: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?w=500&q=75",
  basqueCheese: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=500&q=75",
};

export const menuItems: MenuItem[] = [
  // ── Tortas enteras ──
  { name: "Torta de frutos rojos y vainilla", description: "Bizcocho suave de vainilla, crema ligera y compota de frutos rojos frescos.", price: 118, category: "tortas-enteras", highlightLabel: "Best seller", featured: true, image: img.berryVanilla },
  { name: "Torta de chocolate belga", description: "Capas de bizcocho intenso de cacao con ganache sedosa y acabado brillante.", price: 124, category: "tortas-enteras", highlightLabel: "Chef's creation", featured: true, image: img.chocolate },
  { name: "Cheesecake de maracuyá", description: "Cremoso cheesecake horneado con cobertura de maracuyá y base crocante de mantequilla.", price: 112, category: "tortas-enteras", highlightLabel: "Favorito", featured: true, image: img.cheesecake },
  { name: "Torta de lúcuma y manjar", description: "Bizcocho esponjoso con crema de lúcuma, manjar suave y toque de pecanas.", price: 120, category: "tortas-enteras", image: img.caramelCake },
  { name: "Torta Red Velvet de la casa", description: "Bizcocho aterciopelado con frosting de queso crema y acabado delicado.", price: 126, category: "tortas-enteras", image: img.redVelvet },
  // ── Porciones individuales ──
  { name: "Porción de torta de chocolate belga", description: "Intensa, húmeda y equilibrada, con ganache de cacao oscuro.", price: 18, category: "porciones-individuales", image: img.chocoSlice },
  { name: "Porción de cheesecake de frutos rojos", description: "Cremosa y fresca, con salsa artesanal de berries.", price: 17, category: "porciones-individuales", image: img.berrySlice },
  { name: "Porción de carrot cake especiada", description: "Con nueces, canela y frosting suave de queso crema.", price: 16, category: "porciones-individuales", image: img.carrotCake },
  { name: "Porción de torta de pistacho y vainilla", description: "Delicada, aromática y con textura ligera.", price: 19, category: "porciones-individuales", image: img.pistachio },
  { name: "Milhojas de manjar", description: "Capas crujientes de hojaldre con generoso relleno de manjar.", price: 18, category: "porciones-individuales", image: img.milhojas },
  // ── Postres de vitrina ──
  { name: "Tartaleta de fresas frescas", description: "Base crocante, crema pastelera de vainilla y fresas seleccionadas.", price: 15, category: "postres-de-vitrina", image: img.tartFresa },
  { name: "Éclair de chocolate y avellanas", description: "Pasta choux rellena de crema suave y cobertura de chocolate.", price: 16, category: "postres-de-vitrina", image: img.eclair },
  { name: "Brownie fudge con pecanas", description: "Denso, húmedo y con centro intenso de cacao.", price: 14, category: "postres-de-vitrina", image: img.brownie },
  { name: "Cinnamon roll glaseado", description: "Suave, aromático y recién horneado, con glaseado delicado.", price: 15, category: "postres-de-vitrina", image: img.cinnamon },
  { name: "Box de 6 macarons", description: "Sabores surtidos: vainilla, frambuesa, pistacho, chocolate, limón y café.", price: 32, category: "postres-de-vitrina", highlightLabel: "Best seller", featured: true, image: img.macarons },
  { name: "Galletas de mantequilla decoradas", description: "Mantequilla premium, acabado delicado y sabor suave.", price: 12, category: "postres-de-vitrina", image: img.cookies },
  { name: "Tiramisú individual", description: "Capas cremosas con café y cacao en polvo.", price: 16, category: "postres-de-vitrina", image: img.tiramisu },
  // ── Box / regalos dulces ──
  { name: "Sweet Box Clásica", description: "Selección de brownie, galletas finas, mini tartaleta y mini roll.", price: 46, category: "box-regalos-dulces", highlightLabel: "Ideal para regalo", featured: true, image: img.giftBox },
  { name: "Box Té de la Tarde", description: "Mini postres, scones suaves, mermelada artesanal y petit fours.", price: 58, category: "box-regalos-dulces", image: img.teaTime },
  { name: "Caja de 12 mini postres", description: "Surtido elegante para regalo o celebración.", price: 72, category: "box-regalos-dulces", image: img.miniDesserts },
  { name: "Box Celebration", description: "Mini torta, macarons, brownies y detalles dulces de vitrina.", price: 88, category: "box-regalos-dulces", image: img.celebration },
  // ── Bebidas calientes ──
  { name: "Espresso", description: "Shot intenso de café de especialidad.", price: 8, category: "bebidas-calientes", image: img.espresso },
  { name: "Americano", description: "Espresso suave con agua caliente.", price: 10, category: "bebidas-calientes", image: img.americano },
  { name: "Capuccino", description: "Espresso con leche vaporizada y espuma cremosa.", price: 12, category: "bebidas-calientes", image: img.cappuccino },
  { name: "Latte vainilla", description: "Espresso con leche sedosa y esencia de vainilla.", price: 14, category: "bebidas-calientes", image: img.latte },
  { name: "Mocha", description: "Espresso, chocolate artesanal y leche vaporizada.", price: 15, category: "bebidas-calientes", image: img.mocha },
  { name: "Chocolate caliente artesanal", description: "Cacao premium fundido con leche cremosa.", price: 16, category: "bebidas-calientes", image: img.hotChoco },
  { name: "Té premium en hebra", description: "Selección de tés finos en hebra.", price: 12, category: "bebidas-calientes", image: img.tea },
  // ── Bebidas frías ──
  { name: "Cold brew", description: "Café macerado en frío, de sabor suave y refrescante.", price: 14, category: "bebidas-frias", image: img.coldBrew },
  { name: "Iced latte", description: "Leche cremosa y espresso sobre hielo.", price: 15, category: "bebidas-frias", image: img.icedLatte },
  { name: "Frappé de mocha", description: "Cremoso, frío y con acabado de cacao.", price: 17, category: "bebidas-frias", image: img.frappe },
  { name: "Limonada de frutos rojos", description: "Refrescante, delicada y ligeramente ácida.", price: 14, category: "bebidas-frias", image: img.lemonade },
  { name: "Maracuyá frozen", description: "Intenso, fresco y tropical.", price: 15, category: "bebidas-frias", image: img.frozen },
  // ── Especiales de temporada ──
  { name: "Tarta de higos y miel", description: "Edición delicada con notas suaves y acabado artesanal.", price: 19, category: "especiales-de-temporada", highlightLabel: "Edición limitada", image: img.figTart },
  { name: "Croissant relleno de pistacho", description: "Hojaldre fino con crema sedosa de pistacho.", price: 18, category: "especiales-de-temporada", highlightLabel: "Chef's creation", featured: true, image: img.croissant },
  { name: "Mini cake de naranja y amapola", description: "Ligero, aromático y perfecto para la tarde.", price: 16, category: "especiales-de-temporada", image: img.orangeCake },
  { name: "Cheesecake vasco individual", description: "Cremoso, dorado por fuera y suave al centro.", price: 18, category: "especiales-de-temporada", image: img.basqueCheese },
];
