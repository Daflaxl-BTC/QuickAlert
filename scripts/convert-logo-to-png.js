const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function convertSvgToPng() {
  const svgPath = path.join(__dirname, '..', 'public', 'quickalert-logo.svg');
  const outputPath = path.join(__dirname, '..', 'public', 'quickalert-logo.png');
  
  // Read SVG content
  const svgContent = fs.readFileSync(svgPath, 'utf-8');
  
  // Create HTML with SVG centered on transparent background
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          width: 512px;
          height: 512px;
          background: transparent;
        }
        svg {
          width: 512px;
          height: 512px;
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
  
  await page.setViewport({ width: 512, height: 512 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  await page.screenshot({
    path: outputPath,
    type: 'png',
    omitBackground: true
  });
  
  await browser.close();
  
  console.log(`PNG erfolgreich erstellt: ${outputPath}`);
}

convertSvgToPng().catch(console.error);
