const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');

// PNG files to convert (excluding favicon files)
const pngFiles = [
  'air.png',
  'book.png',
  'chamber.png',
  'fly.png',
  'layer.png',
  'logo.png',
  'Loveville.png',
  'vile.png',
  'washington.png'
];

async function convertToWebP() {
  console.log('🔄 Converting PNG images to WebP...\n');

  for (const file of pngFiles) {
    const inputPath = path.join(publicDir, file);
    const outputPath = path.join(publicDir, file.replace('.png', '.webp'));

    try {
      await sharp(inputPath)
        .webp({ quality: 90 })
        .toFile(outputPath);

      const inputSize = fs.statSync(inputPath).size;
      const outputSize = fs.statSync(outputPath).size;
      const savings = ((1 - outputSize / inputSize) * 100).toFixed(1);

      console.log(`✅ ${file}`);
      console.log(`   Original: ${(inputSize / 1024).toFixed(1)}KB`);
      console.log(`   WebP: ${(outputSize / 1024).toFixed(1)}KB`);
      console.log(`   Saved: ${savings}%\n`);
    } catch (error) {
      console.error(`❌ Error converting ${file}:`, error.message);
    }
  }

  console.log('✨ Conversion complete!');
}

convertToWebP();
