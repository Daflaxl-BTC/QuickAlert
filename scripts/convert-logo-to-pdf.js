const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertSvgToPdf() {
  const svgPath = path.join(__dirname, '..', 'public', 'quickalert-logo.svg');
  const outputPath = path.join(__dirname, '..', 'brand-assets', 'quickalert-logo.pdf');
  
  // Read SVG content
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  
  // Create HTML with SVG centered
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        @page {
          size: 150mm 150mm;
          margin: 0;
        }
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          width: 150mm;
          height: 150mm;
          display: flex;
          justify-content: center;
          align-items: center;
          background: transparent;
        }
        svg {
          width: 120mm;
          height: 120mm;
        }
      </style>
    </head>
    <body>
      ${svgContent}
    </body>
    </html>
  `;
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.pdf({
    path: outputPath,
    width: '150mm',
    height: '150mm',
    printBackground: true,
    preferCSSPageSize: true
  });
  
  await browser.close();
  
  console.log(`PDF erfolgreich erstellt: ${outputPath}`);
}

convertSvgToPdf().catch(console.error);
