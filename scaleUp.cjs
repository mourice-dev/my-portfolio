const fs = require('fs');
const path = require('path');

const dir = './src/components';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');

  // Scale up text-[XXpx] slightly to improve legibility
  content = content.replace(/text-\[(\d+)px\]/g, (match, p1) => {
    let size = parseInt(p1);
    if (size < 24) {
      size += 2; // Bump everything under 24px by another 2px
    }
    return `text-[${size}px]`;
  });

  fs.writeFileSync(filePath, content);
});
console.log('Scale up done!');
