import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { existsSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const guides = [
  {
    html: 'complete-nepal-trek-guide.html',
    pdf:  'complete-nepal-trek-guide.pdf',
  },
  {
    html: 'food-guide-nepal.html',
    pdf:  'food-guide-nepal.pdf',
  },
  {
    html: 'top-30-places-nepal.html',
    pdf:  'top-30-places-nepal.pdf',
  },
  {
    html: 'culture-guide-nepal.html',
    pdf:  'culture-guide-nepal.pdf',
  },
  {
    html: 'hinduism-nepal-guide.html',
    pdf:  'hinduism-nepal-guide.pdf',
  },
  {
    html: 'top-30-souvenirs-nepal.html',
    pdf:  'top-30-souvenirs-nepal.pdf',
  },
];

async function generatePDFs() {
  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });

  for (const guide of guides) {
    const htmlPath = join(__dirname, 'html', guide.html);
    const pdfPath  = join(__dirname, 'pdf',  guide.pdf);

    if (!existsSync(htmlPath)) {
      console.error(`  HTML not found: ${htmlPath}`);
      continue;
    }

    console.log(`\nGenerating: ${guide.pdf}`);
    const page = await browser.newPage();

    // Load fonts & external resources properly
    await page.setExtraHTTPHeaders({ 'Accept-Language': 'en-US,en;q=0.9' });

    await page.goto(`file://${htmlPath}`, {
      waitUntil: 'networkidle0',
      timeout: 60000,
    });

    // Give Google Fonts and images extra time to load
    await new Promise(r => setTimeout(r, 2000));

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '0mm', right: '0mm', bottom: '0mm', left: '0mm' },
      preferCSSPageSize: true,
    });

    await page.close();

    // Report file size
    const { statSync } = await import('fs');
    const stats = statSync(pdfPath);
    const sizeKB = Math.round(stats.size / 1024);
    console.log(`  Saved: ${pdfPath}`);
    console.log(`  Size:  ${sizeKB} KB`);
  }

  await browser.close();
  console.log('\nAll PDFs generated successfully!');
}

generatePDFs().catch(err => {
  console.error('Fatal error:', err);
  process.exit(1);
});
