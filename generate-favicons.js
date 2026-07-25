const sharp = require('sharp');
const pngToIco = require('png-to-ico').default;
const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'favicon.png');
const publicDir = path.join(__dirname, 'public');
const appDir = path.join(__dirname, 'app');

const pngSizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'favicon-48x48.png', size: 48 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

async function run() {
  console.log('Generating favicon assets from favicon.png...\n');

  for (const { name, size } of pngSizes) {
    const outputPath = path.join(publicDir, name);
    await sharp(source)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png()
      .toFile(outputPath);
    console.log(`✅ public/${name} (${size}x${size})`);
  }

  const icoBuffers = await Promise.all(
    [16, 32, 48].map((size) =>
      sharp(source)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
        .png()
        .toBuffer()
    )
  );
  const icoBuffer = await pngToIco(icoBuffers);
  fs.writeFileSync(path.join(appDir, 'favicon.ico'), icoBuffer);
  console.log('✅ app/favicon.ico (16/32/48 multi-size)');

  console.log('\n✨ Favicon generation complete!');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
