const fs = require('fs');
fs.mkdirSync('public/images', { recursive: true });
const files = [
  'hero-bg.svg', 'about-main.svg', 'about-2.svg', 'about-3.svg', 'about-4.svg', 'about-5.svg', 
  'product-1.svg', 'product-2.svg', 'product-3.svg', 'product-4.svg', 'product-5.svg', 
  'cert-1.svg', 'cert-2.svg', 'cert-3.svg'
];

files.forEach(f => {
  fs.writeFileSync('public/images/' + f, `<svg width="1200" height="800" xmlns="http://www.w3.org/2000/svg"><rect width="100%" height="100%" fill="#e2e8f0"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="40" fill="#475569">${f}</text></svg>`);
});
console.log("Images created.");
