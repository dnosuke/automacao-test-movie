const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function generatePDF() {
    const reportHtmlPath = path.resolve(__dirname, '../cypress/reports/index.html');
    const pdfPath = path.resolve(__dirname, '../cypress/reports/report.pdf');

    if (!fs.existsSync(reportHtmlPath)) {
        console.error('HTML report not found at:', reportHtmlPath);
        process.exit(1);
    }

    console.log('Generating PDF from:', reportHtmlPath);

    const browser = await puppeteer.launch({
        headless: "new"
    });
    const page = await browser.newPage();

    // Use file:// protocol to load local HTML
    await page.goto(`file://${reportHtmlPath}`, {
        waitUntil: 'networkidle0'
    });

    await page.pdf({
        path: pdfPath,
        format: 'A4',
        printBackground: true,
        margin: {
            top: '20px',
            right: '20px',
            bottom: '20px',
            left: '20px'
        }
    });

    await browser.close();
    console.log('PDF report generated successfully at:', pdfPath);
}

generatePDF().catch(err => {
    console.error('Error generating PDF:', err);
    process.exit(1);
});
