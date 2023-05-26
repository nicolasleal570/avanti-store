import { Product } from "@/types/products.type";

/**
 * Mock products for testing purpose
 */
export const productsFixture: Product[] = [
  {
    id: "gid://shopify/Product/7982853619734",
    title: "Slides",
    description:
      "Simple, minimal and comfortable, these slides feature a classic design in the perfect shade of iron. Whether you're just lounging around the house or running errands, these slides will offer all-day comfort.",
    handle: "slides",
    featuredImage: {
      id: "gid://shopify/ProductImage/39774608687126",
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/slides.jpg?v=1675447358",
    },
    priceRange: {
      minVariantPrice: {
        amount: "25.0",
        currencyCode: "CAD",
      },
    },
  },
  {
    id: "gid://shopify/Product/7982856273942",
    title: "Sweatpants",
    description:
      "Soft and comfortable sweatpants in stylish shades. They are perfect for lounging with their cozy stretch fabric that offers just the right amount of warmth. Enjoy the ultimate relaxation experience!",
    handle: "sweatpants",
    featuredImage: {
      id: "gid://shopify/ProductImage/39774602002454",
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenSweatpants01.jpg?v=1675455387",
    },
    priceRange: {
      minVariantPrice: {
        amount: "35.0",
        currencyCode: "CAD",
      },
    },
  },
  {
    id: "gid://shopify/Product/7982902771734",
    title: "Men's T-shirt",
    description:
      "Crafted from organic cotton, this classic T-shirt features a relaxed fit, crew neckline and timeless look. Enjoy the breathable comfort of 100% organic cotton.",
    handle: "men-t-shirt",
    featuredImage: {
      id: "gid://shopify/ProductImage/39774603051030",
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenTshirt01.jpg?v=1675455410",
    },
    priceRange: {
      minVariantPrice: {
        amount: "40.0",
        currencyCode: "CAD",
      },
    },
  },
  {
    id: "gid://shopify/Product/7982904639510",
    title: "Hoodie",
    description:
      "This hoodie is the perfect choice for comfort and warmth. Meticulously crafted from 100% cotton, the hoodie features a soft, plush fleece interior and a unisex sizing design. Soft and lightweight, it's sure to be your go-to for chilly days.",
    handle: "hoodie",
    featuredImage: {
      id: "gid://shopify/ProductImage/39774600036374",
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenHoodie01.jpg?v=1675455175",
    },
    priceRange: {
      minVariantPrice: {
        amount: "90.0",
        currencyCode: "CAD",
      },
    },
  },
  {
    id: "gid://shopify/Product/7982905098262",
    title: "Men's Crewneck",
    description:
      "This high-quality crewneck is perfect for your everyday look. Made with 100% cotton, it's soft, comfortable, and undeniably stylish. Full sleeved for a classic look and effortlessly versatile, this cotton crewneck is a must-have in any wardrobe.",
    handle: "men-crewneck",
    featuredImage: {
      id: "gid://shopify/ProductImage/39774600855574",
      url: "https://cdn.shopify.com/s/files/1/0688/1755/1382/products/GreenMenscrew01.jpg?v=1675454919",
    },
    priceRange: {
      minVariantPrice: {
        amount: "120.0",
        currencyCode: "CAD",
      },
    },
  },
];
