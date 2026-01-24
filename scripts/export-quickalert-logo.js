const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function exportQuickAlertLogo() {
  const outputPngPath = path.join(__dirname, '..', 'public', 'QuickAlert-Logo-mit-Text.png');
  const outputPdfPath = path.join(__dirname, '..', 'public', 'QuickAlert-Logo-mit-Text.pdf');
  
  // Das komplette Logo von der Website (Icon + Text)
  const html = `
    <!DOCTYPE html>
    <html>
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com">
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@900&display=swap" rel="stylesheet">
      <style>
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        html, body {
          width: 600px;
          height: 200px;
          background: transparent;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        .logo-text {
          font-family: 'Poppins', sans-serif;
          font-size: 72px;
          font-weight: 900;
          letter-spacing: -0.025em;
          filter: drop-shadow(0 0 10px rgba(212, 184, 150, 0.6));
        }
        .text-white {
          color: #3D2F1F;
        }
        .text-orange {
          color: #F5A623;
        }
      </style>
    </head>
    <body>
      <div class="logo-container">
        <!-- Warnleuchte Icon -->
        <svg width="120" height="120" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
          <!-- Strahlen -->
          <path d="M32 4V12" stroke="#F5A623" stroke-width="3" stroke-linecap="round"/>
          <path d="M32 4V12" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(45 32 32)"/>
          <path d="M32 4V12" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(-45 32 32)"/>
          <path d="M32 4V12" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(22.5 32 32)"/>
          <path d="M32 4V12" stroke="#F5A623" stroke-width="3" stroke-linecap="round" transform="rotate(-22.5 32 32)"/>
          <!-- Glaskuppel -->
          <path d="M22 38C22 28 24 22 32 22C40 22 42 28 42 38" fill="#F5A623"/>
          <rect x="20" y="22" width="6" height="18" rx="1" fill="white" opacity="0.4"/>
          <!-- Basis -->
          <ellipse cx="32" cy="42" rx="16" ry="6" fill="#4A4A4A"/>
          <ellipse cx="32" cy="40" rx="14" ry="4" fill="#5A5A5A"/>
        </svg>
        <span class="logo-text">
          <span class="text-white">Quick</span><span class="text-orange">Alert</span>
        </span>
      </div>
    </body>
    </html>
  `;
  
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  await page.setViewport({ width: 600, height: 200 });
  await page.setContent(html, { waitUntil: 'networkidle0' });
  
  // Warte auf Font-Laden
  await page.waitForFunction(() => document.fonts.ready);
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // PNG Export
  await page.screenshot({
    path: outputPngPath,
    type: 'png',
    omitBackground: true
  });
  console.log('PNG erfolgreich erstellt:', outputPngPath);
  
  // PDF Export  
  await page.pdf({
    path: outputPdfPath,
    width: '600px',
    height: '200px',
    printBackground: true,
    preferCSSPageSize: true
  });
  console.log('PDF erfolgreich erstellt:', outputPdfPath);
  
  await browser.close();
}

exportQuickAlertLogo().catch(console.error);
