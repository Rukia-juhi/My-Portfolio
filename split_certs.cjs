const fs = require('fs');
const path = require('path');
const { PDFDocument } = require('pdf-lib');

async function splitPdf() {
  const pdfPath = 'C:/Users/DELL/.gemini/antigravity/brain/ba17b61a-c190-437c-90ed-a1745fa7785d/.user_uploaded/media_1789579061568.pdf';
  const pdfBytes = fs.readFileSync(pdfPath);
  const srcDoc = await PDFDocument.load(pdfBytes);
  const count = srcDoc.getPageCount();
  console.log('Total pages in certificates PDF:', count);

  const outDir = path.join(__dirname, 'public', 'certificates');
  if (!fs.existsSync(outDir)) {
    fs.mkdirSync(outDir, { recursive: true });
  }

  const names = [
    'hackerrank-sql',
    'mongodb-basics',
    'gradtwin-internship',
    'coursera-data-analysis',
    'deloitte-data-analytics',
    'iaspire-gold',
    'intellithon-25',
    'mycaptain-python',
    'marcello-web-dev',
    'coursera-genai'
  ];

  for (let i = 0; i < count; i++) {
    const subDoc = await PDFDocument.create();
    const [copiedPage] = await subDoc.copyPages(srcDoc, [i]);
    subDoc.addPage(copiedPage);
    const subPdfBytes = await subDoc.save();
    const fileName = names[i] || ('cert-' + (i + 1));
    const targetFile = path.join(outDir, fileName + '.pdf');
    fs.writeFileSync(targetFile, subPdfBytes);
    console.log('Saved:', fileName + '.pdf', '(' + subPdfBytes.length + ' bytes)');
  }
}

splitPdf().catch(console.error);
